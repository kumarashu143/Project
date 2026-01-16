import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  const [state, handleSubmit] = useForm("xwpqrknd");

  return (
    <div className="container my-4">
      <div className="row g-4">
       
        <div className="col-md-6">
          <div className="p-4 border rounded bg-light shadow-sm">
            <h5 className="text-center text-success fw-bold mb-3">Send Us a Message</h5>
            {!state.succeeded ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label fw-semibold">Your Mobile Number</label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-success w-100 fw-bold"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="alert alert-success text-center rounded shadow-sm mb-0">
                <h5 className="fw-bold mb-2">🎉 Thank you!</h5>
                <p>We’ve received your message.</p>
              </div>
            )}
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="p-4 text-center border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-center fs-5">
            <h5 className="mb-3">✉️📱 Get in Touch</h5>
            <p><strong>Email:</strong> indi.bhopal@gmail.com</p>
            <p><strong>Address:</strong> Plot #9, MP Nagar Zone-1, Bhopal-462011</p>
           <p><strong>Mobile Number:</strong>+91 8839331601 / +91 9223504014</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
