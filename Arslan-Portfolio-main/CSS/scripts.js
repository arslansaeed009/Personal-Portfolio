// JavaScript for navbar color change on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add("scroll");
    } else {
        document.getElementById("navbar").classList.remove("scroll");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Close navbar menu when clicking outside
    document.addEventListener('click', function(event) {
      const isNavbarToggler = event.target.closest('.navbar-toggler');
      const isNavbarMenu = event.target.closest('.navbar-collapse');
  
      if (!isNavbarToggler && !isNavbarMenu) {
        // Clicked outside navbar toggler and navbar menu
        const navbarMenu = document.querySelector('.navbar-collapse');
        if (navbarMenu.classList.contains('show')) {
          // Close the navbar menu
          navbarMenu.classList.remove('show');
        }
      }
    });
  });
  

// About to toggle the skills
document.addEventListener('DOMContentLoaded', function() {
  var otherSkills = document.querySelector('.other-skills');
  var button = document.getElementById('toggle-skills');

  // Hide other skills initially
  otherSkills.style.display = 'none';

  // Toggle button functionality
  button.addEventListener('click', function() {
      if (otherSkills.style.display === 'none' || otherSkills.style.display === '') {
          otherSkills.style.display = 'block'; // Show other skills
          button.innerText = 'Close';
      } else {
          otherSkills.style.display = 'none'; // Hide other skills
          button.innerText = 'Show Other Skills';
      }
  });



  // Set skill bars
  document.querySelectorAll('.skill-bar').forEach(function(skillBar) {
      var skillLevel = skillBar.getAttribute('data-skill');
      skillBar.style.setProperty('--skill-level', skillLevel + '%');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const projects = [
      {
          title: "AuraUserve-Mobile-App",
          image: "./images/react_native1.jpg",
          description: "React Native and Node.js-based platform enabling users to book diverse home services. Integrated Firebase for real-time data management, implemented user authentication, and ensured scalable application architecture.",
          category: "React Native",
          githubLink: "https://github.com/mu2602659/AuraUserve-Mobile-App"
      },
      {
          title: "Clinic-Management-Frontend",
          image: "./images/boot.png",
          description: "The Clinic Management System is a web application designed to simplify clinic operations. It allows for easy management of patient appointments, records, and clinic schedules, offering a streamlined interface for both staff and patients. The system aims to enhance operational efficiency and improve the overall patient care experience.",
          category: "Bootstrap",
          githubLink: "https://github.com/arslansaeed009/Clinic_Project"
      },
      {
          title: "Home-Service-Connect-Web-App",
          image: "./images/react2.jpg",
          description: "This project is a web application designed to streamline home maintenance. It connects users with verified service providers for various household tasks such as cleaning, repairs, and renovations. The platform provides a user-friendly interface.",
          category: "React",
          githubLink: "https://github.com/arslansaeed009/Home-Service-Connect-Web-Application"
      },
      {
          title: "BlogIT-Blogging-Project",
          image: "./images/django.jpg",
          description: "BlogIT is a Django-based blogging platform that enables users to create, manage, and share blog posts effortlessly. It features user authentication, post categorization, and a clean interface, making it easy for bloggers to publish content and engage with readers.",
          category: "Django",
          githubLink: "https://github.com/arslansaeed009/BlogIT-Blogging_Django-Project"
      },
      {
          title: "ShopVista-E-commerce",
          image: "./images/react1.png",
          description: "ShopVista is an e-commerce website developed using React.js, designed for fashion, jewelry, and electronics marketplace. It includes features like real-time product data fetching via API and Redux for state management.",
          category: "React",
          githubLink: "https://github.com/arslansaeed009/E-commerce-site"
      },
      {
          title: "Library Management System",
          image: "./images/cpp1.png",
          description: "This is a simple console-based Library Management System developed in C++. It provides basic functionalities for managing a library, including adding books and users, issuing books, and returning books.",
          category: "C++",
          githubLink: "https://github.com/arslansaeed009/Library-Management-system"
      },
      {
          title: "Hotel-Reservation-System",
          image: "./images/cpp2.jpeg",
          description: " This application allows users to manage hotel room reservations and provides basic functionalities to handle customer interactions and room availability.",
          category: "C++",
          githubLink: "https://github.com/arslansaeed009/Hotel-Reservation-System"
      },
      {
          title: "Bank-Loan-Management-System",
          image: "./images/cpp3.jpg",
          description: "A console-based Bank Loan Management System developed in C++. This system allows users to manage loan applications, calculate interest, and handle repayments.",
          category: "C++",
          githubLink: "https://github.com/arslansaeed009/Bank-Loan-Management-System-"
      },
      {
          title: "Tic-Tac-Toe-Game-in-C++",
          image: "./images/cpp4.jpg",
          description: "A console-based implementation of the classic Tic-Tac-Toe game developed in C++. The game features a simple AI opponent and allows two players to take turns playing the game.",
          category: "C++",
          githubLink: "https://github.com/arslansaeed009/Tic-Tac-Toe-Game-in-C-"
      },
     
      {
          title: "Personal Porfolio",
          image: "./images/html.jpg",
          description: "This portfolio showcases my skills and projects as a frontend developer, built using HTML, CSS, and Bootstrap. The site features a clean and responsive design, with sections dedicated to my work, skills, experience, and contact information.",
          category: "Html, css",
          githubLink: "https://github.com/arslansaeed009/Project_Portfolio"
      },
  ];
  
  const projectGrid = document.getElementById("project-grid");
  const showMoreButton = document.getElementById("show-more-button");
  const filterButtons = document.querySelectorAll(".filter-button");
  let visibleProjects = 5;

  function renderProjects(filteredProjects) {
    projectGrid.innerHTML = "";
    const projectsToShow = filteredProjects.slice(0, visibleProjects);
    projectsToShow.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content ">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
        <div class="project-content">
          <a href="${project.githubLink}" class="view-project-button" target="_blank">
            <i class="fab fa-github"></i> View Project
          </a>
        </div>
      `;
      projectGrid.appendChild(projectElement);
    });


      if (filteredProjects.length <= visibleProjects) {
          showMoreButton.style.display = "none";
      } else {
          showMoreButton.style.display = "block";
      }
  }

  showMoreButton.addEventListener("click", () => {
      visibleProjects += 7;
      const activeButton = document.querySelector(".filter-button.active");
      const category = activeButton.getAttribute("data-category");
      const filteredProjects = category === "All" ? projects : projects.filter(project => project.category === category);
      renderProjects(filteredProjects);
  });

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
          const category = button.getAttribute("data-category");
          const filteredProjects = category === "All" ? projects : projects.filter(project => project.category === category);
          visibleProjects = 7;
          renderProjects(filteredProjects);
      });
  });

  // Initial rendering of projects
  renderProjects(projects);
});





// Services Section
$(document).ready(function(){
  $(".button").click(function(){
      var value = $(this).attr("data-filter");
      if(value == 'all'){
          $(".filter").show("100");
      }
      else{
          $(".filter").not("."+value).hide("1000");
          $(".filter").filter("."+value).show("1000");
      }
      $("ul.button li").click(function(){
          $(this).addClass("active").siblings().removeClass("active");
      })
  });
});
document.addEventListener('DOMContentLoaded', function() {
  animateFooter();
});

function animateFooter() {
  const footerIcons = document.querySelectorAll('.footer-icon');

  footerIcons.forEach((icon, index) => {
      icon.style.animation = `fadeIn 1s ${index * 0.2}s forwards`;
  });
}