const SocialBar = () => {
	return (
		<nav className="flex fixed mt-24 transition-all duration-300 shadow-md bg-white">
			<ul>
				<li>
					<a
						href="https://www.facebook.com/YosoyKaroKids/?locale=es_LA"
						target="_blanck"
						className="justify-center flex h-16 text-white bg-blue-600">
						<img
							src="/assets/social_media/facebook-color.svg"
							className="w-12 p-2"></img>
						<span className="hidden font-bold uppercase">Facebook</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/yosoy.karokidsmoda/"
						target="_blanck"
						className="justify-center flex h-16 text-white bg-rose-500">
						<img
							src="/assets/social_media/instagram-color.svg"
							className="w-10 p-2"></img>
						<span className="hidden font-bold uppercase">Instagram</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/@karokidsmodainfantil4675"
						target="_blanck"
						className="justify-center flex h-16 text-white bg-red-600">
						<img
							src="/assets/social_media/youtube-color.svg"
							className="w-12 p-2"></img>
						<span className="hidden font-bold uppercase">Youtube</span>
					</a>
				</li>
				<li>
					<a
						href="https://wa.link/fdh8yl"
						target="_blanck"
						className="justify-center flex h-16 text-white bg-green-600">
						<img
							src="/assets/social_media/whatsapp-color.svg"
							className="w-10 p-2"></img>
						<span className="hidden font-bold uppercase">Whatsapp</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SocialBar;
