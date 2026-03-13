"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Award, Handshake, Heart, Rocket, Shield, Sparkles, Star, TrendingUp, Trophy, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="blurBottom"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="B M Football Club"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Squad", id: "squad" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Victory Through Teamwork"
          bottomRightText="contact@bmfootballclub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Welcome to B M Football Club!"
          description="Where talent meets unity, and victory is our passion. Join our community of dedicated athletes pushing boundaries and celebrating the beautiful game."
          background={{ variant: "radial-gradient" }}
          leftCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AtMwSb7XtcCusJpAQKgNh79ZwX/uploaded-1773409983384-ytp7yc7n.png",              imageAlt: "Football match action"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AtMwSb7XtcCusJpAQKgNh79ZwX/uploaded-1773410005514-sr0numwv.png",              imageAlt: "Team training session"
            }
          ]}
          rightCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8a5kra",              imageAlt: "Goal celebration moment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lvb60q&_wi=1",              imageAlt: "Championship trophy"
            }
          ]}
          tag="Premium Football Experience"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "View Our Squad", href: "#squad" },
            { text: "Get In Touch", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y1rkik", alt: "Team member" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cv1gk7", alt: "Team member" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gom2yb", alt: "Team member" }
          ]}
          avatarText="Join 50+ passionate athletes"
          carouselPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Mission"
          tagIcon={Shield}
          tagAnimation="blur-reveal"
          title="The Pitch is Ours, The Victory is Ours. B M Football Club is more than just a team; it is a family. Founded on the principles of sportsmanship and dedication, we aim to inspire the next generation of footballers in our community through discipline, teamwork, and excellence."
          buttons={[
            { text: "Learn More About Us", href: "#squad" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="squad" data-section="squad">
        <FeatureCardTwentySeven
          title="Our Heroes in Action"
          description="Explore the journey of B M Football Club. Browse through the photos of our players and match highlights. You can download your favorite moments to celebrate with the team."
          tag="Gallery"
          tagIcon={Award}
          tagAnimation="slide-up"
          features={[
            {
              id: "match-day",              title: "Match Day",              descriptions: [
                "Live action from competitive matches",                "High-quality professional photography",                "Download button for each image"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=yvjd9l&_wi=2",              imageAlt: "Match day action"
            },
            {
              id: "training",              title: "Training Sessions",              descriptions: [
                "Behind-the-scenes training footage",                "Skill development and drills",                "Team preparation moments"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AtMwSb7XtcCusJpAQKgNh79ZwX/uploaded-1773409406284-0grlkcyk.png",              imageAlt: "Training session"
            },
            {
              id: "achievements",              title: "Achievement Moments",              descriptions: [
                "Trophy victories and celebrations",                "Championship moments",                "Team milestones and records"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lvb60q&_wi=2",              imageAlt: "Achievement trophy"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Download Gallery", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Warriors"
          description="Our dedicated athletes representing excellence in every position. From goalkeepers to forwards, each player brings passion and skill to the pitch."
          tag="Our Squad"
          tagIcon={Users}
          tagAnimation="blur-reveal"
          members={[
            {
              id: "goalkeeper-1",              name: "Goalkeeper",              role: "Position: Keeper",              description: "Elite shot-stopping and distribution skills",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cv1gk7&_wi=1",              imageAlt: "Goalkeeper portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            },
            {
              id: "defender-1",              name: "Defender",              role: "Position: Defence",              description: "Strong defensive presence and tactical awareness",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gom2yb&_wi=1",              imageAlt: "Defender portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            },
            {
              id: "midfielder-1",              name: "Midfielder",              role: "Position: Midfield",              description: "Creative play-making and ball control expertise",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y1rkik&_wi=1",              imageAlt: "Midfielder portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            },
            {
              id: "forward-1",              name: "Forward",              role: "Position: Attack",              description: "Clinical finishing and goal-scoring prowess",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kq9y02&_wi=1",              imageAlt: "Forward portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            },
            {
              id: "midfielder-2",              name: "Midfielder",              role: "Position: Midfield",              description: "Ball retention and pressing intensity",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y1rkik&_wi=2",              imageAlt: "Midfielder portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            },
            {
              id: "defender-2",              name: "Defender",              role: "Position: Defence",              description: "Aerial dominance and set-piece expertise",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gom2yb&_wi=2",              imageAlt: "Defender portrait",              socialLinks: [
                { icon: Zap, url: "#" },
                { icon: Heart, url: "#" }
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View Full Roster", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Club Excellence by the Numbers"
          description="Our track record speaks to commitment, achievement, and continuous growth in competitive football."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          metrics={[
            {
              id: "players",              value: "50+",              title: "Active Players",              description: "Talented athletes across all positions",              icon: Users
            },
            {
              id: "matches",              value: "120+",              title: "Matches Played",              description: "Competitive games across seasons",              icon: Trophy
            },
            {
              id: "wins",              value: "85%",              title: "Win Rate",              description: "Consistent competitive performance",              icon: Trophy
            },
            {
              id: "tournaments",              value: "15+",              title: "Tournaments Won",              description: "Championship victories and honors",              icon: Award
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "View Statistics", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Recognized by Tournament Organizers"
          description="B M Football Club is proud to be affiliated with prestigious football organizations and tournament bodies."
          tag="Partnerships"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          names={[
            "National Football League",            "Regional Football Association",            "International Football Federation",            "Championship Series",            "Sports Development Organization",            "Athletic Union",            "Professional Equipment Partners",            "Sports Media Network"
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hbkl0k",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zamwro",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q5kxza",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=psde0o",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=t9o1jt",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=eiloi3",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qyxbmw",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4mbmb9"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Community Says"
          description="Testimonials from coaches, players, and supporters who believe in B M Football Club's mission and impact."
          tag="Reviews"
          tagIcon={Star}
          tagAnimation="blur-reveal"
          testimonials={[
            {
              id: "coach-1",              name: "Coach Ahmed",              handle: "Head Coach",              testimonial: "B M Football Club represents the future of local football. The dedication and professionalism I see daily from our players is remarkable. We're not just winning matches; we're building champions.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gvvpvo",              imageAlt: "Coach Ahmed",              icon: Award
            },
            {
              id: "player-1",              name: "Rahman",              handle: "Forward, Club Captain",              testimonial: "Being part of this club feels like being part of a family. We push each other every day to be better. The pitch is ours, and our victory is earned through teamwork.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=poyamt&_wi=1",              imageAlt: "Rahman",              icon: Heart
            },
            {
              id: "player-2",              name: "Karim",              handle: "Midfielder",              testimonial: "The training environment here is world-class. Every session makes us sharper, faster, stronger. This is where dreams become reality.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y1rkik&_wi=3",              imageAlt: "Karim",              icon: Sparkles
            },
            {
              id: "supporter-1",              name: "Fatima",              handle: "Supporter & Community Member",              testimonial: "Watching B M Football Club grow has been incredible. They inspire our youth and represent our community with pride. We're proud supporters.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=poyamt&_wi=2",              imageAlt: "Fatima",              icon: Zap
            },
            {
              id: "player-3",              name: "Hassan",              handle: "Goalkeeper",              testimonial: "The discipline and focus instilled here is exceptional. Every practice is purposeful. We're committed to excellence.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cv1gk7&_wi=2",              imageAlt: "Hassan",              icon: Shield
            },
            {
              id: "youth-player",              name: "Aziz",              handle: "Youth Development Program",              testimonial: "B M Football Club opened doors for me. I came as a young hopeful and now I'm playing competitively. This club believes in potential.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kq9y02&_wi=2",              imageAlt: "Aziz",              icon: Rocket
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Stay Connected with B M Football Club"
          background={{ variant: "downward-rays-animated" }}
          buttons={[
            { text: "Email Us", href: "mailto:contact@bmfootballclub.com" },
            { text: "Follow on Social Media", href: "#" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Club",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Squad", href: "#squad" },
                { label: "Gallery", href: "#gallery" },
                { label: "Achievements", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Email", href: "mailto:contact@bmfootballclub.com" }
              ]
            },
            {
              title: "Information",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Club Rules", href: "#" },
                { label: "Sponsorship", href: "#" }
              ]
            }
          ]}
          bottomLeftText="Victory Through Teamwork"
          bottomRightText="© 2024 B M Football Club. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
