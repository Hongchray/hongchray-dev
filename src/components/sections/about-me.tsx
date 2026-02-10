import Image from "next/image";

import SagarFullPose from "/public/images/sagar-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
	return (
		<Container className="bg-gray-50" id="about">
			<div className="self-center">
				<Tag label="About me" />
			</div>

			<div className="flex w-full flex-col justify-between gap-12 md:flex-row">
				{/* Image */}
				<div className="flex justify-center md:order-first md:justify-end">
					<div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
						<Image
							src={SagarFullPose}
							alt="Fullpose of Sagar"
							className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
							style={{ objectFit: "cover" }}
						></Image>
						<div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
					</div>
				</div>

				{/* Content */}
				<div className="flex max-w-xl flex-col gap-6">
					<Typography variant="h3">
						Curious about me? Here you have it:
					</Typography>
					<Typography>
						I'm a full-stack developer specializing in Laravel and Next.js. I’m
						passionate about bringing both the technical and visual aspects of
						digital products to life. User experience, pixel-perfect design,
						well-structured projects and databases, and writing clear, readable,
						and high-performance code are all important to me.
					</Typography>
					<Typography>
						I began my journey as a web developer in 2024. Since then, I’ve
						continued to grow, taking on new challenges and learning the latest
						technologies along the way. Now, in my early thirties, nearly two
						years after starting my web development career, I’m building
						cutting-edge web applications using modern technologies such as
						Laravel, Next.js, TypeScript, Next.js, Tailwind CSS, and elegant UI
						components like ShadCN and Hero UI, among others.
					</Typography>
					<Typography>
						I am a progressive thinker who enjoys working on products
						end-to-end—from ideation to development.
					</Typography>
					<Typography>
						When I’m not coding, you can usually find me exploring new
						technologies, experimenting with side projects, or simply enjoying
						with some freetime.
					</Typography>
					<Typography>Finally, some quick bits about me.</Typography>
					<div className="flex flex-col gap-2 md:flex-row md:gap-6">
						<ul className="flex list-inside list-disc flex-col gap-2">
							<Typography component="li">
								Bachelor’s degree in Software Development
							</Typography>
							<Typography component="li">
								Bachelor’s degree in English
							</Typography>
						</ul>
						{/* <ul className="flex list-inside list-disc flex-col gap-2">
							<Typography component="li">Avid learner</Typography>
							<Typography component="li">Aspiring indie hacker</Typography>
						</ul> */}
					</div>
					<Typography>
						I am currently seeking new opportunities, so feel free to reach out
						and connect. I’m excited to contribute to innovative projects and
						collaborate with great teams! 😉
					</Typography>
				</div>
			</div>
		</Container>
	);
};

export default AboutMeSection;
