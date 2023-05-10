function getName() {
                let name = prompt("What is your name?").trim();
                if (name.length === 0) {
                    alert("Please, provide a name 🙏");
                } else {
                    getEmail(name);
                }
            }

            function getEmail(name) {
                let email = prompt("What is your email?").trim();
                if (email.length === 0) {
                    alert("Please, provide an email 🙏");
                } else {
                    alert(`Thank you, ${name}! We'll be in touch shortly 🙏`);
                }
            }

            let getInTouch = document.querySelector("span");
            getInTouch.addEventListener("click", getName);