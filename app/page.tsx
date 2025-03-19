import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Импульс – Платформа для развития",
	description:
		"Проверь статус своих олимпиад, развивайся в IT, участвуй в хакатонах и чемпионатах. Достигай новых высот с нами!",
	keywords: [
		"Импульс",
		"олимпиады",
		"хакатоны",
		"чемпионаты",
		"IT",
		"программирование",
		"фронтенд",
		"фулстек",
		"искусственный интеллект",
		"машинное обучение",
		"кибербезопасность",
		"Big Data",
		"Web3",
		"геймдев",
		"мобильная разработка",
		"сетевые технологии",
		"data science",
	],
};

export default function Home() {
	return (
		<>
			<header className='font-involve h-full bg-[#141414] text-white flex flex-col items-center md:px-[50px] px-6 md:rounded-b-[100px] rounded-b-[50px]'>
				<a href='' className='mt-[30px]'>
					<Image src='/logo.svg' alt='logo' width={274} height={48} />
				</a>

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

				<h2 className='font-[family-name:var(--font-gerhaus)] text-center 2xl:text-[118px] md:text-6xl sm:text-4xl text-2xl leading-tight lg:mt-0 mt-12'>
					СТРЕМИСЬ. ИССЛЕДУЙ.
					<br />
					<span className='text-[#D8C5FF] 2xl:text-[144px]'>БУДЬ ПЕРВЫМ(ОЙ)</span>.
				</h2>

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

				<button className='sm:px-24 sm:w-auto w-full py-2 mt-4 md:hidden bg-[#D8C5FF] text-black lg:text-2xl md:text-lg text-sm font-bold rounded-full cursor-pointer'>
					Начни развиваться с нами
				</button>

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
			<main>
				<section className='flex flex-col md:px-[50px] px-6 md:mt-[100px] mt-[75px]'>
					<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
						ЗАЧЕМ ОНО ТЕБЕ НАДО?
					</h2>

					<div className='w-full grid xl:grid-cols-2 grid-cols-1 gap-6 mt-5 text-lg'>
						<div className='w-full grid gap-6'>
							<div className='md:col-span-2 p-3 rounded-4xl shadow-lg flex flex-col relative overflow-hidden md:md:h-[400px] h-[300px]'>
								<Image
									src='/calculator.png'
									alt='Calculator'
									width={1000}
									height={1000}
									className='absolute inset-0 w-full h-full object-cover'
								/>
								<div className='relative bg-white p-3 rounded-2xl md:max-w-120 md:absolute md:bottom-3 flex flex-col gap-[6px]'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)]'>ПРЯМОЙ ПУТЬ В ТОПОВЫЕ ВУЗЫ</h3>
									<p>
										победы в олимпиадах дают льготы при поступлении в МГУ, ВШЭ, СПбГУ, МФТИ, ИТМО, Бауманку и другие
										ведущие университеты.
									</p>
								</div>
							</div>
							<div className='md:col-span-1 bg-black p-6 rounded-4xl shadow-lg flex flex-col md:h-[400px] h-[300px]'>
								<div className='flex flex-col gap-[6px]'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>
										ПРОВЕРКА СВОИХ ВОЗМОЖНОСТЕЙ
									</h3>
									<p className='text-white'>
										соревнования прокачивают стрессоустойчивость, скорость мышления и командную работу, что важно для
										карьеры.
									</p>
								</div>
							</div>
							<div className=' p-3 rounded-4xl shadow-lg flex flex-col justify-end bg-[#d8c5ff] md:h-[400px] h-[300px]'>
								<div className='bg-white rounded-xl p-3 flex flex-col gap-[6px]'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-black'>
										ПРЕИМУЩЕСТВО НА РЫНКЕ ТРУДА
									</h3>
									<p className='text-black'>
										рекрутеры ценят достижения больше, чем дипломы. Победы выделяют тебя среди кандидатов.
									</p>
								</div>
							</div>
						</div>
						<div className='w-full grid gap-6'>
							<div className='bg-[#141414] text-white p-6 rounded-4xl shadow-lg flex flex-col justify-end md:h-[400px] h-[300px]'>
								<div className='flex md:flex-col-reverse flex-col gap-[6px]'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>
										ШАНС ПОПАСТЬ В IT-ГИГАНТЫ
									</h3>
									<p>
										Яндекс, Сбер, Тинькофф, Авито следят за участниками соревнований, приглашая лучших на стажировки и
										работу.
									</p>
								</div>
							</div>
							<div className='md:col-span-1 bg-[#d8c5ff] p-3 rounded-4xl shadow-lg flex flex-col md:h-[400px] h-[300px]'>
								<div className='bg-white rounded-xl p-3 flex flex-col gap-[6px]'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)]'>ПОЛЕЗНЫЕ ЗНАКОМСТВА</h3>
									<p>на конкурсах ты найдёшь будущих коллег, единомышленников и партнёров для стартапов.</p>
								</div>
							</div>
							<div className='md:col-span-2 p-3 rounded-4xl shadow-lg flex flex-col relative overflow-hidden md:h-[400px] h-[300px]'>
								<Image
									src='/helmet.png'
									alt='Helmet'
									width={1000}
									height={1000}
									className='absolute inset-0 w-full h-full object-cover'
								/>
								<div className='z-10 bg-white p-3 rounded-2xl md:max-w-120'>
									<h3 className='text-2xl font-[family-name:var(--font-gerhaus)]'>РЕАЛЬНЫЕ КЕЙСЫ И ОПЫТ</h3>
									<p>вместо учебных задач ты решаешь актуальные проблемы индустрии, которые интересны компаниям.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='md:px-[50px] px-6 md:mt-[100px] mt-[75px] bg-black rounded-4xl'>
					<div className='pt-[50px] bg-black text-white '>
						<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
							Успешные кейсы
						</h2>
						<div className='flex gap-5 flex-wrap xl:flex-nowrap py-12'>
							<div className='flex flex-wrap sm:flex-nowrap gap-5 bg-white p-8 h-full rounded-2xl'>
								<Image
									src='/mihail_person.png'
									alt='avatar'
									width={215}
									height={215}
									className='max-w-[215px] h-full object-cover'
								/>
								<div className='text-black'>
									<h3 className='font-[family-name:var(--font-gerhaus)] text-2xl'>Михаил Мирзаянов</h3>
									<p>основатель платформы Codeforces, ассистент ИТМО факультета ИТиП</p>
									<p className='font-bold mt-4'>
										Михаил Мирзаянов участвовал в ACM ICPC, Всероссийской олимпиаде по информатике и TopCoder, а в 2010
										году создал Codeforces.
									</p>
								</div>
							</div>
							<div className='flex flex-wrap sm:flex-nowrap gap-5 bg-white p-8 h-full rounded-2xl'>
								<Image
									src='/egor_person.png'
									alt='avatar'
									width={215}
									height={215}
									className='max-w-[215px] h-full object-cover'
								/>
								<div className='text-black'>
									<h3 className='font-[family-name:var(--font-gerhaus)] text-2xl'>Егор Куликов</h3>
									<p>Работал в Яндекс, Google над алгоритмами поиска, затем присоединился к DeepMind</p>
									<p className='font-bold mt-4'>
										Егор Куликов стал победителем Всероссийской олимпиады по информатике, Google Code Jam 2010, TopCoder
										Open 2012 и бронзовым призёром ACM ICPC.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
