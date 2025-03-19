// about this web aplication

const About = () => {
  return (
    <div class=" container px-10 py-3 pt-20 overflow-y-auto ">
      <h1 className="text-2xl font-bold">
        🎉 Welcome to the Birthday Wish Creator 🎊
      </h1>

      <p className="mt-5">
        Our <strong>Birthday Wish Creator</strong> is an innovative online
        platform designed to help you create and share personalized birthday
        cards for your loved ones. Unlike traditional cards, this platform
        allows you to customize every aspect of the card, making it unique and
        special for the person you're celebrating.
      </p>

      <h2 className="font-bold text-2xl mt-5">📌 Key Features</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
        <li>
          <strong className="font-bold text-lg">
            Customizable Birthday Cards:
          </strong>{" "}
          Add a personal touch by customizing the birthday card with the
          recipient’s{" "}
          <span class="bg-yellow-100 p-1 text-black">
            name, image, and a special wish message.
          </span>
        </li>
        <li>
          <strong>Unique Card URL:</strong> Once your custom card is created, a
          unique <span class="bg-yellow-100 p-1 text-black">URL</span> is
          generated, allowing you to easily share the card via social media,
          email, or messaging apps.
        </li>
        <li>
          <strong>QR Code Sharing:</strong> Along with the URL, the platform
          also provides a{" "}
          <span class="bg-yellow-100 p-1 text-black">QR code</span> that can be
          scanned to access the card directly on mobile devices.
        </li>
        <li>
          <strong>Easy to Use:</strong> The user interface is intuitive and easy
          to navigate, making the creation process quick and fun.
        </li>
        <li>
          <strong>Access from Anywhere:</strong> All your custom birthday cards
          are saved online, so you can access and share them from any device at
          any time.
        </li>
      </ul>

      <h2 className="font-bold text-2xl mt-5">🎨 How It Works</h2>
      <p className="mb-3">
        Creating a custom birthday wish card is simple. Here’s how you can do
        it:
      </p>
      <ol className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10 mt-5">
        <li>
          <strong>Enter the Recipient’s Details:</strong> Start by inputting the
          birthday person’s name and uploading a photo if desired.
        </li>
        <li>
          <strong>Create Your Personalized Message:</strong> Write a heartfelt
          birthday message that will appear on the card.
        </li>
        <li>
          <strong>Generate Your Card:</strong> Once you’ve entered all the
          details, click the button to generate your personalized birthday card.
        </li>
        <li>
          <strong>Get Your Custom URL & QR Code:</strong> After creation, you’ll
          receive a unique URL and QR code that you can easily share with
          others.
        </li>
      </ol>

      <h2 className="font-bold text-2xl">🚀 Why Use Our Platform?</h2>
      <p className="my-5 ">
        Our Birthday Wish Creator isn’t just about sending a generic greeting.
        It’s about making someone feel truly special with a personalized and
        memorable birthday card that can be shared online. Whether it's for a
        friend, family member, or colleague, this tool provides a creative and
        modern way to send warm wishes.
      </p>

      <h2 className="font-bold text-2xl">📱 Share Your Card Effortlessly</h2>
      <p className="mb-4">
        Once you’ve created your custom birthday wish card, you can share it
        via:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        <li>
          <strong>Social Media:</strong> Share the unique URL on platforms like
          Facebook, Twitter, Instagram, and more.
        </li>
        <li>
          <strong>Messaging Apps:</strong> Send the card link via WhatsApp,
          Messenger, or any other messaging app.
        </li>
        <li>
          <strong>Printed QR Code:</strong> Print the QR code to give someone a
          physical card with a digital touch.
        </li>
      </ul>

      <h3 className="font-bold text-2xl mt-10">
        🌟 Start Creating Your Custom Birthday Card Today!
      </h3>
      <p className="mt-5">
        Don't wait for the next birthday to make someone smile. Try our Birthday
        Wish Creator now and send your loved ones a birthday card that's as
        unique as they are!
      </p>
      <div className="text-center mt-5">
        <p className="font-bold">Developer : <a href="https://github.com/cyber-programer">MD Sifat Islam</a></p>
        <p>Designer: <a href="">MD shohanul Islam</a></p>
      </div>
    </div>
  );
};

export default About;
