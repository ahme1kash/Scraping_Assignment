# Web Scraping Assignment

This project is a web scraper designed to collect information about colleges from the CollegeDekho website. The scraper is built using Node.js, Axios, and Cheerio.
## Utilities

### Cheerio.js
Cheerio works with a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient.
Official website:- https://cheerio.js.org/



## Features

- Scrapes college information including name, logo, rating, reviews count, city, fees, accreditation, exams, average package, location, institution type, and shortlisted by count.
- Tries to handle the misssing data and sets it to their corresponding keys in a predefined object.
- Saves the scraped data into a JSON file.

## Installation and Usage

1. Clone the repository in a machine:

```https://github.com/ahme1kash/Scraping_Assignment```

2. Navigate to the project directory:
   `npm install`
   
3 Usage
`const bsse_url = 'https://www.collegedekho.com/dental/colleges-in-india/';
`

4 Scraper

`node index.js.`



5 Dependencies
_ axios
- cheerio
- fs
- pretty-console.log


6 Installing all dependencies 
 
  - `npm install axios cheerio fs pretty-console.log`





7 - Sample output containg all fields
``` [  {

 
        "institutes": "Saveetha University",
        "logo": "https://media.collegedekho.com/media/img/institute/logo/Saveetha.png?height=150&width=150",
        "rating": "4.3",
        "reviews_count": "15",
        "city": "Chennai",
        "fees": "3.2 Lacs",
        "accredetion": "NAAC",
        "exams": "NEET",
        "Avg_package": "6 Lacs",
        "institution_location": "Chennai, Tamil Nadu",
        "institution_type": "Private",
        "shortlisted_by": "1200 students"
    }...,
    ]
```
8 - ToDo In Future

- Will build rest API and display all the results in bootstrap table in html file with the help of template Engine PUG


