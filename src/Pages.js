import React from 'react';
import './Pages.css';
import { Accordion } from 'react-bootstrap';

function Pages() {
  return (
    <section className="pages-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">
          🌟 Learn More About <span className="text-danger">Deliver X</span>
        </h2>

        <div className="row g-4">
          {/* How it works */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100 bg-light">
              <div className="card-body">
                <h4 className="text-success fw-bold mb-3">🚚 How It Works</h4>
                <p className="text-muted">
                  Choose a plan, place your order, and track it in real-time. We ensure your favorite items arrive fast, safe, and on time.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100 bg-white border-start border-5 border-warning">
              <div className="card-body">
                <h4 className="text-warning fw-bold mb-3">💡 Why Choose Us?</h4>
                <ul className="list-unstyled text-muted">
                  <li>⚡ Fast and secure deliveries</li>
                  <li>📍 Real-time order tracking</li>
                  <li>📞 24/7 customer support</li>
                  <li>💰 Flexible pricing plans</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="col-md-12">
            <div className="card shadow-sm border-0 bg-light">
              <div className="card-body">
                <h4 className="text-info fw-bold mb-4">❓ Frequently Asked Questions</h4>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>How long does delivery take?</Accordion.Header>
                    <Accordion.Body>
                      Delivery times vary based on your selected plan — from same-day to 3 days max.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I change my plan later?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely! You can switch plans anytime from your account settings.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Is customer support available 24/7?</Accordion.Header>
                    <Accordion.Body>
                      Yes, our team is available day and night to assist you.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-12">
            <div className="card shadow-sm border-0 bg-white border-start border-5 border-danger">
              <div className="card-body">
                <h4 className="text-danger fw-bold mb-3">📞 Contact Us</h4>
                <p className="text-muted">
                  Have questions? Reach out to our support team via the{' '}
                  <a href="/contact" className="text-primary text-decoration-none">Contact Page</a>{' '}
                  or call us directly at{' '}
                  <a href="tel:+919380334317" className="fw-bold text-danger text-decoration-none">+919380334317</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pages;
