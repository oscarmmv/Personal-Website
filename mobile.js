document.addEventListener("DOMContentLoaded", function() {
    if (window.matchMedia("(pointer: none), (pointer: coarse)").matches) {
        const swup = new Swup();

        document.documentElement.innerHTML = `
            <html>
            <head>
                <title>oscarsaul</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
                <link rel="stylesheet" href="mobile-style.css">
                <link rel="icon" href="assets/logo.png">
            </head>
            <body>
                <h1 itemprop="name">
                <span id="text" class="title" >oscar saul.</span><span id="cursor">|</span>
                </h1>  
                <div id="wrapper">
                <div class="quote" itemprop="description" style="top: -300px;">Hey 👋, I'm a Computer Science and Business student focused on developing full-stack web applications and backend services. I have a strong interest in cybersecurity, fintech, and 3D modeling. Currently, I’m exploring the applications of Nmap's, modeling in Fusion 360, and automating <a class="gradient sublink" href="arbitrage-trader">arbitrage opportunities</a> through web scraping. Want to learn more <a style="text-decoration: underline;"class="gradient sublink" href="about-me">about me?</a> 👈😎</div>
                <br>
                <h2>Projects</h2>
                <section>
                    <p itemprop="projects"><a href="arbitrage-trader">Arbitrage Trader</a> - a program that calculates profit opportunities across multiple sportsbooks</p>
                    <p itemprop="projects"><a href="social-crawler">Social Crawler</a> - a selenium based web crawler that retrieves users social media metrics.</p>
                    <p itemprop="projects"><a href="ai-playlist">AI Generated Playlist</a> - a web based application that uses Open Ai api to generate a unique playlist.</p>
                    <p itemprop="projects"><a href="mouse-heatmap">Mouse Heatmap</a> - lightweight application that stores mouse points and provides a playback of heatmap.</p>
                    <p itemprop="projects"><a href="dns-config">DNS Configurator</a> - python script that changes system DNS settings to Cloudflares resolvers.</p>
                </section>
                <h2>Experience</h2>
                <section id="project-container">
                    <div>
                        <h3 itemprop="jobTitle">CompTIA Security+ SY0-701</h3><p id="time">2025</p>
                        <p class="quote">Certified in CompTIA Security+; qualified to identify and manage cybersecurity risks, implement security protocols, and protect networks and systems from threats.</p>
                    </div>
                    <div>
                        <h3 itemprop="jobTitle">Makerspace <span id="time">2024-2025</span></h3>
                        <p class="quote">Engage in creating innovative projects utilizing various technologies, including 3D modeling, printing, and coding.</p>
                    </div>
                    <div>
                        <h3 itemprop="jobTitle">RecruitForMe <span id="time">2022 - 2023</span></h3>
                        <p class="quote">Software Developer (Co-op) for <a href="https://recruitforme.com">recruitforme</a>, a networking and employment-based platform.</p>
                    </div>
                    <div>
                        <h3 itemprop="jobTitle">AWS Certificate <span id="time">2022</span></h3>
                        <p class="quote">Certified in Lambda, DynamoDB, Fargate, S3, and Elastic Beanstalk.</p>
                    </div>
                </section><br>
                <div class="connect-with-me">
                    <a id="connect" href="https://www.linkedin.com/in/oscarmmv/" target="_blank">
                    <button class="connect-button"><i class="bi bi-linkedin"></i></button>
                    </a>
                    <a id="connect" href="https://github.com/oscarmmv" target="_blank">
                    <button class="connect-button"><i class="bi bi-github"></i></button>
                    </a>
                    <a id="connect" href="https://discord.com/users/748901094650019971" target="_blank">
                    <button class="connect-button"><i class="bi bi-discord"></i></button>
                    </a>
                </div>
                </div>
            </body>
            </html>
        `;

        // Typing effect
        const textElement = document.getElementById('text');
        const cursorElement = document.getElementById('cursor');
        const text = "oscar saul.";
        let index = 0;

        function type() {
            if (index === 0) {
                textElement.textContent = ""; 
            }
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); 
            } else {
                cursorElement.style.display = 'none'; 
            }
        }
        }
        type();
});

