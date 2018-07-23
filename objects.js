const Bonnaroo = Object.create({}, {
    Business: {
        value: "Bonnaroo"
    },
    employmentStart: {
        value: "06-05-2011"
    },
    employmentEnd: {
        value: "06-20-2011"
    },
    Likes:{
        value: "Good free shows"
    },
    Dislikes: {
        value: "Very long hours, and hot"
    }
})

const JackDaniels = Object.create({}, {
    Business: {
        value: "JackDaniels"
    },
    employmentStart: {
        value: "08-03-2015"
    },
    employmentEnd: {
        value: "06-23-2017"
    },
    Likes:{
        value: "Cool Process"
    },
    Dislikes: {
        value: "Bad management"
    }
})

const Programming = (company,employmentStart,employmentEnd) => {
  let newJob = Object.create({}, {
      business: {
          value: company
      },
      startDate: {
          value: employmentStart
      }
  })
  return newJob
}

const job = Programming ("NSS", "22-22-22", "88-88-88")

console.log(job)

const jobArray = [Bonnaroo,JackDaniels,job]

for (let i = 0; i < jobArray.length; i++) {
    const article = document.createElement("article")
    article.setAttribute("id", jobArray[i].business)
    document.querySelector("#container").appendChild(article)
    console.log(jobArray[i])
}