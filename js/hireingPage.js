const candidatesData = [
  {
    name: "Pratham Upadhyay",
    email: "Pratham@gmail.com",
    jobPreferences: [
      "Web developer",
      "Software developer",
      "Android developer",
    ],
    location: "mumbai, india",
  },
  {
    name: "Kartik Vadhwana",
    email: "kar@gmail.com",
    jobPreferences: ["Web developer", "software developer", "figma developer"],
    location: "delhi, India",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    jobPreferences: [
      "Front-end developer",
      "UI/UX designer",
      "JavaScript developer",
    ],
    location: "New York, USA",
  },

  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    jobPreferences: [
      "Data analyst",
      "Machine learning engineer",
      "Python developer",
    ],
    location: "London, UK",
  },
  {
    name: "Emily Johnson",
    email: "emilyjohnson@gmail.com",
    jobPreferences: [
      "Full-stack developer",
      "Software engineer",
      "Java developer",
    ],
    location: "San Francisco, USA",
  },
  {
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    jobPreferences: [
      "Database administrator",
      "SQL developer",
      "Data engineer",
    ],
    location: "Chicago, USA",
  },
  {
    name: "Sophia Wilson",
    email: "sophiawilson@gmail.com",
    jobPreferences: [
      "Mobile app developer",
      "iOS developer",
      "Swift programmer",
    ],
    location: "Sydney, Australia",
  },
  {
    name: "Daniel Lee",
    email: "daniellee@gmail.com",
    jobPreferences: [
      "DevOps engineer",
      "Cloud architect",
      "System administrator",
    ],
    location: "Toronto, Canada",
  },
];

let candidates = [];

const searchLocation = document.querySelector("#searchLocation");
const searchJob = document.querySelector("#searchLocation");
let locationValue;
let jobValue;

document.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URLSearchParams(window.location.search);
  locationValue = searchParams.get("location");
  jobValue = searchParams.get("jobTitle");
  performSearch();
});

searchLocation.addEventListener("input", (e) => {
  locationValue = e.target.value.toLowerCase();
  console.log(locationValue);
});
searchJob.addEventListener("input", (e) => {
  jobValue = e.target.value.toLowerCase();
  console.log(jobValue);
});
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", performSearch);

function performSearch() {
  const formattedLocationValue = locationValue
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");
  const formattedJobValue = jobValue.toLowerCase().trim().replace(/\s+/g, "");

  candidates.forEach((candidate) => {
    const formattedCandidateLocation = candidate.location
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "");
    const formattedCandidateJobPreferences = candidate.jobPreferences.map(
      (preference) => preference.toLowerCase().trim().replace(/\s+/g, "")
    );

    const isVisible =
      formattedCandidateLocation.includes(formattedLocationValue) ||
      formattedCandidateJobPreferences.includes(formattedJobValue);

    candidate.element.classList.toggle("hide", !isVisible);
  });
}

const candidatesHolder = document.querySelector("[candidate-holder]");
const candidatesListing = document.querySelector("[candidate-template]");
function populateCandidates() {
  candidates = candidatesData.map((data) => {
    const candidate = candidatesListing.content.cloneNode(true).children[0];

    const name = candidate.querySelector("[candidate-name]");
    const email = candidate.querySelector("[candidate-email]");
    const preferences = candidate.querySelector("[candidate-preference]");
    const location = candidate.querySelector("[candidate-location]");

    name.textContent = data.name;
    email.textContent = data.email;
    data.jobPreferences.forEach((preference) => {
      const preferenceElement = document.createElement("p");
      preferenceElement.textContent = preference;
      preferences.appendChild(preferenceElement);
    });
    location.textContent = data.location;

    candidatesHolder.append(candidate);
    return {
      name: data.name,
      email: data.email,
      jobPreferences: data.jobPreferences,
      location: data.location,
      element: candidate,
    };
  });
}

populateCandidates();
