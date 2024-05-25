import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Irfan Khan</span>
            from <span className="purple"> Texas, USA.</span>
            <br />
            <br />
            I'm not just your average Senior Full-Stack Developer; I'm your go-to tech partner with over 6+ years of hands-on experience and a proud record of launching.
            <br />
            <strong className="purple">Why choose me?</strong>
            <p>🤝 Client-Centric Approach <br />
              🌐 Efficient management across different time zones <br />
              💻 Full-stack expertise with a 5-star rating on 20+ projects<br />
            </p>
            <p>🎯 Specializing in tailoring software solutions, I've worked across various industries, from food and e-commerce to fitness, health, finance, and networking. My projects have left their mark globally, with success stories in Norway, UK, USA, Australia, Canada, and beyond.</p>

            <p class="header">🧰 𝐌𝐲 𝐓𝐨𝐨𝐥𝐛𝐨𝐱:</p>
            <ul class="toolbox">
              <li><strong>𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝 𝐖𝐢𝐳𝐚𝐫𝐝𝐫𝐲:</strong> React.js, Vue.js, Angular, Next.js, HTML, CSS, Bootstrap, Tailwind CSS.</li>
              <li><strong>𝐁𝐚𝐜𝐤-𝐞𝐧𝐝 𝐌𝐚𝐠𝐢𝐜:</strong> Node.js, PHP/Laravel, Python (Django/Flask), Express.js, Nest.js.</li>
              <li><strong>𝐌𝐨𝐛𝐢𝐥𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐒𝐨𝐫𝐜𝐞𝐫𝐲:</strong> React-Native & Flutter (iOS + Android).</li>
            </ul>

            <p class="header">𝐖𝐡𝐚𝐭 𝐈 𝐁𝐫𝐢𝐧𝐠 𝐭𝐨 𝐭𝐡𝐞 𝐓𝐚𝐛𝐥𝐞:</p>
            <ul class="skills">
              <li>🌐 Web Development: Crafting end-to-end solutions for all your web needs.</li>
              <li>📱 App Development: Cooking up user-friendly mobile applications for iOS and Android.</li>
            </ul>

            <p>Ready to turn your ideas into reality? Hit that "Hire Now" or "Invite" button, or just shoot me a message. Let’s make tech magic together! 🚀✨</p>

            Apart from coding, some other activities that I love to do!
          </p>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
