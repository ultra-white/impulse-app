import Image from "next/image";

export default function Home() {
	return (
		<>
			<header className='font-involve h-full bg-[#141414] text-white flex flex-col items-center md:px-[50px] px-6 md:rounded-b-[100px] rounded-b-[50px]'>
				{/* Логотип */}
				<a href='' className='mt-[30px]'>
					<Image src='/logo.svg' alt='logo' width={274} height={48} />
				</a>

				{/* Картинка */}
				<div className='mt-12 w-full flex flex-col items-center relative'>
					<Image
						src='/astronaut.jpg'
						alt='Astronaut'
						width={5000}
						height={500}
						className='md:rounded-[50px] rounded-xl'
					/>
					<div className='bg-white text-black lg:p-6 p-4 mt-3 rounded-[35px] text-sm lg:w-xl w-xs absolute lg:bottom-8 lg:left-8 bottom-4 left-4 md:block hidden'>
						<p className='font-[family-name:var(--font-gerhaus)] text-xl'>MIDJOURNEY</p>
						<p className='text-xs'>
							/imagine prompt: A stylized digital illustration of a floating humanoid figure, soft pastel color palette,
							futuristic sci-fi environment, clean line art, retro-futurism aesthetic, glowing portal in the background,
							ethereal atmosphere, high-quality flat shading, smooth gradients
						</p>
					</div>
				</div>

				{/* Главный заголовок */}
				<h2 className='font-[family-name:var(--font-gerhaus)] text-center 2xl:text-[118px] md:text-6xl sm:text-4xl text-2xl leading-tight lg:mt-0 mt-12'>
					СТРЕМИСЬ. ИССЛЕДУЙ.
					<br />
					<span className='text-[#D8C5FF] 2xl:text-[144px]'>БУДЬ ПЕРВЫМ(ОЙ)</span>.
				</h2>

				{/* Кнопки-направления */}
				<div className='flex flex-wrap justify-center gap-3 max-w-6xl lg:text-2xl md:text-lg text-sm md:mt-2 mt-5'>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Фронтенд</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Олимпиады</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Фулстек</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>AI/ML</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Геймдев</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Мобильная разработка</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Кибербезопасность</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Big Data</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Сетевые технологии</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>IT</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Web3</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Хакатоны</span>
					<div className='flex items-center gap-4 flex-wrap'>
						<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Чемпионаты</span>
						<button className='lg:px-24 px-12 py-2 bg-[#D8C5FF] text-black font-bold rounded-full cursor-pointer hidden md:block'>
							Начни развиваться с нами
						</button>
						<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Data Science</span>
					</div>
				</div>

				{/* Кнопка */}
				<button className='sm:px-24 sm:w-auto w-full py-2 mt-4 md:hidden bg-[#D8C5FF] text-black lg:text-2xl md:text-lg text-sm font-bold rounded-full cursor-pointer'>
					Начни развиваться с нами
				</button>

				{/* Подвал */}
				<div className='flex w-full items-center md:mt-40 sm:mt-20 mt-10 md:pb-20 pb-10 flex-wrap gap-8 md:text-left text-center md:justify-between justify-center'>
					<p className='font-[family-name:var(--font-gerhaus)] xl:text-5xl lg:text-2xl mg:text-xl text-lg max-w-full'>
						МИР МЕНЯЕТСЯ. ЛИБО ТЫ <br />
						<span className='text-[#D8C5FF]'>ПРОГРАММИРУЕШЬ</span> ЕГО, ЛИБО <br />
						ОН <span className='text-[#D8C5FF]'>ПРОГРАММИРУЕТ</span> ТЕБЯ.
					</p>

					<div className='justify-end items-end'>
						<p className='lg:text-lg text-sm text-gray-200 mb-[10px]'>
							Мы спросили ChatGPT, <br /> что написать здесь, <br /> и вот что он придумал
						</p>
						<p className='text-[35px] font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>©chat Gpt</p>
					</div>
				</div>
			</header>
		</>
	);
}
