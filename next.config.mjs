/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'cdn-img.prettylittlething.com',
			  },
			]
	}
};

export default nextConfig;
