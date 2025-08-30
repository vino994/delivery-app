import React from 'react';

function Pages() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">More About Deliver X</h2>

      <div className="mb-5">
        <h4>How It Works</h4>
        <p>
          Deliver X makes it super easy to get your favorite products delivered to your doorstep quickly and reliably. Simply choose a plan that suits your needs, place an order, and track it in real time.
        </p>
      </div>

      <div className="mb-5">
        <h4>Why Choose Us?</h4>
        <ul>
          <li>Fast and secure deliveries</li>
          <li>Real-time tracking</li>
          <li>24/7 customer support</li>
          <li>Affordable pricing plans</li>
        </ul>
      </div>

      <div className="mb-5">
        <h4>Frequently Asked Questions</h4>
        <p><strong>Q: How long does delivery take?</strong></p>
        <p>A: Depending on your plan, delivery can take from same-day to 3 days.</p>

        <p><strong>Q: Can I change my plan later?</strong></p>
        <p>A: Yes! You can upgrade or downgrade your plan anytime from your account settings.</p>
      </div>

      <div className="mb-5">
        <h4>Contact Us</h4>
        <p>
          Have questions or need help? Reach out to our support team via the contact page or call us directly at <a href="tel:+1234567890">+1 234 567 890</a>.
        </p>
      </div>
    </section>
  );
}

export default Pages;
