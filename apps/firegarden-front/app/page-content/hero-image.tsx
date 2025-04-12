import Image from "next/image";

export const heroImage = (
	<div className="image-container w-full h-full">
		<Image
			src="/IMG_5423.JPEG"
			alt="Profile photo of me"
			width={300}
			height={300}
			className="object-cover w-full h-full"
			priority
			aria-label="Profile photo"
		/>
	</div>
);
