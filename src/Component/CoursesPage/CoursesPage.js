import React from 'react';
import emailjs from 'emailjs-com';

const CoursesPage = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_vsfps6c', 'template_nupi244', e.target, 'user_tdcDOBbbex8KKVryIMCzG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    function myFunction() {
        alert("Successfully Enrolled The Course");
      }
    return (
        <div className="container mt-5 pt-5 mb-5 justify-content-center mt-5">
            <h1 className="text-center mt-5 pt-5 fs-1 fw-bold">Enroll Now</h1>
                <form className="box mx-5 px-5 pt-5 contact-form" onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control fs-3" placeholder="Your Name" id="exampleInputname" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="email" name="email" className="form-control fs-3" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="number" name="phone" className="form-control fs-3" placeholder="Phone Number" id="exampleInputphone" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="address" className="form-control fs-3" placeholder="Your Address" id="exampleInputaddress" aria-describedby="addressHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="school" className="form-control fs-3" placeholder="Your School" id="exampleInputschool" aria-describedby="schoolHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="course" className="form-control fs-3" placeholder="Which Course you want to enroll" id="exampleInputcourse" aria-describedby="courseHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="text" name="message" className="form-control fs-3" placeholder="Why You want to Enroll" style={{ height: "100px" }} id="exampleInputmessage" />
                    </div>
                    <div className="d-grid gap-2 mt-4 mb-5">
                        <button className="btn btn-warning fs-3 text-white p-2 fw-bold" type="submit" onClick={myFunction}>Send</button>
                    </div>
                </form>
        </div>
    );
};

export default CoursesPage;