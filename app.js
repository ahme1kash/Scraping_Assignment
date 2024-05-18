const axios = require("axios");
const pcl = require("pretty-console.log")
pcl.enable()
const cheerio = require("cheerio");
const fs = require("fs");
const url = 'https://www.collegedekho.com/dental/colleges-in-india/';
async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        const load_data = cheerio.load(data);

        let institution = []

        let institute_data = load_data('.col-md-12 .box.collegeBox ')
        institute_data.each((index, element) => {
            let institute_obj = {};
            institute_obj.institutes = load_data(element).find('.titleSection h2 a').text().trim();
            institute_obj.logo = load_data(element).find('.collegeLogo img').attr("src");
            institute_obj.rating = load_data(element).find('.collegeRate').text() || "NA";
            institute_obj.reviews_count = load_data(element).find('.collegeinfo li a').text().slice(1, -1) || "NA";
            institute_obj.city = load_data(element).find('.collegeLogo img').attr("alt").split(",").pop();
            institute_obj.fees = load_data(element).find('.fessSection ul li').first().find('p').text().trim().split("\n")[1].trim() === "Fees" ?
                load_data(element).find('.fessSection ul li').first().find('p').text().trim().split("\n")[0].trim() : "NA"


            institute_obj.accredetion = load_data(element).find('.fessSection ul li').first().next().find('p span').text().trim().split("\n")[0] === "Accredition" ?
                load_data(element).find('.fessSection ul li').first().next().find('p').text().trim().split("\n")[0] : "NA"



            institute_obj.exams = load_data(element).find('.fessSection ul li').first().next().next().find('p span').text().trim().split("\n")[0] === "Exams" ? load_data(element).find('.fessSection ul li').first().next().next().find('p').text().trim().split("\n")[0] : load_data(element).find('.fessSection ul li').first().next().find('p span').text().trim().split("\n")[0] === "Exams" ? load_data(element).find('.fessSection ul li').first().next().find('p').text().trim().split("\n")[0] : load_data(element).find('.fessSection ul li').first().next().next().next().find('p span').text().trim().split("\n")[0] === "Exams" ? load_data(element).find('.fessSection ul li').first().next().next().next().find('p').text().trim().split("\n")[0] : "NA"

            institute_obj.Avg_package = load_data(element).find('.fessSection ul li').first().next().next().find('p span').text().trim().split("\n")[0] === "Avg Package" ? load_data(element).find('.fessSection ul li').first().next().next().find('p').text().trim().split("\n")[0] : "NA"

            // console.log()
            institute_obj.institution_location = load_data(element).find('.collegeinfo .title .info ul li').first().text().trim() + load_data(element).find('.collegeinfo ul li').first().next().text().trim();
            institution.push(institute_obj)
            const institution_type = load_data(element).find('.collegeinfo ul li').first().next().next().text().trim();
            if (institution_type === "Private" || institution_type === "Public" || institution_type === "Government") {
                institute_obj.institution_type = institution_type
            }
            else {
                institute_obj.institution_type = "NA"
            }

            institute_obj.shortlisted_by = load_data(element).find('.shortlistSection ul li').first().next().text().trim()
            institution.push(institute_obj)


        })
        console.log(institution)



        fs.writeFile("./institutes.json", JSON.stringify(institution), 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}
scrapeData()