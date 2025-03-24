import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

// Типы для данных олимпиады
interface Olympiad {
	id: number;
	title: string;
	type: string;
	categories: string[];
	audience: string;
	description: string;
	status: string;
	date: string;
	// Дополнительная информация для детальной страницы
	stages?: {
		title: string;
		date: string;
		description: string;
	}[];
	format?: string[];
	ageRange?: string;
	organizer?: {
		name: string;
		support?: string;
	};
	groups?: string;
	prizes?: boolean;
	internship?: boolean;
	additionalBenefits?: string;
	registrationLink?: string;
}

// Функция для получения данных из JSON файла
async function getOlympiadsData(): Promise<Olympiad[]> {
	const filePath = path.join(process.cwd(), "public", "olympiads.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	return JSON.parse(fileContents);
}

// Функция для получения конкретной олимпиады по ID
async function getOlympiadById(id: string): Promise<Olympiad | undefined> {
	const olympiads = await getOlympiadsData();
	return olympiads.find((olympiad) => olympiad.id.toString() === id);
}

// Функция для генерации метаданных
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	// Ожидаем params перед использованием
	const resolvedParams = await params;
	const id = resolvedParams.id;
	const olympiad = await getOlympiadById(id);

	if (!olympiad) {
		return {
			title: "Олимпиада не найдена",
			description: "Запрашиваемая олимпиада не найдена",
		};
	}

	return {
		title: `${olympiad.title} – ${olympiad.type}`,
		description: olympiad.description,
		keywords: ["олимпиада", "конкурс", "чемпионат", ...olympiad.categories],
	};
}

// Генерация статических путей для олимпиад
export async function generateStaticParams() {
	const olympiads = await getOlympiadsData();
	return olympiads.map((olympiad) => ({
		id: String(olympiad.id),
	}));
}

type Props = {
	params: { id: string };
};

export default async function OlympiadPage({ params }: Props) {
	// Ожидаем params перед использованием
	const resolvedParams = await params;
	const id = resolvedParams.id;
	// Получаем данные олимпиады по ID
	const olympiad = await getOlympiadById(id);

	// Если олимпиада не найдена, отображаем 404
	if (!olympiad) {
		notFound();
	}

	// Используем данные по умолчанию, если дополнительная информация не указана
	const stages = olympiad.stages || [
		{
			title: "Регистрация и отборочный этап",
			date: "1 марта - 30 мая 2024",
			description: "Онлайн-тестирование и выполнение отборочных заданий",
		},
		{
			title: "Полуфинал",
			date: "1 июня - 15 июня 2024",
			description: "Решение задач в рамках выбранного направления",
		},
		{
			title: "Финал",
			date: "20 июня - 25 июня 2024",
			description: "Решение кейсов от компаний-партнеров и защита проектов",
		},
	];

	const format = olympiad.format || ["Индивидуальное участие", "Командное участие", "Смешанный формат"];
	const ageRange = olympiad.ageRange || "16-27 лет";
	const organizer = olympiad.organizer || {
		name: "Министерство образования",
		support: "При поддержке Минцифры России",
	};

	return (
		<>
			<header className='font-involve h-full bg-[#141414] text-white flex flex-col items-center md:px-[50px] px-6 md:rounded-b-[100px] rounded-b-[50px]'>
				<Link href='/' className='mt-[30px]'>
					<Image src='/logo.svg' alt='logo' width={274} height={48} />
				</Link>

				<div className='mt-12 w-full flex flex-col items-center relative'>
					<Image
						src='/astronaut.jpg'
						alt={olympiad.title}
						width={5000}
						height={500}
						className='md:rounded-[50px] rounded-xl'
						style={{ filter: "hue-rotate(30deg) brightness(1.1)" }}
					/>
				</div>
				<div className='flex flex-wrap justify-center gap-3 max-w-6xl lg:text-2xl md:text-lg text-sm md:mt-2 lg:mt-[50px] mt-12'>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>Тип: {olympiad.type}</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>
						Направление: {olympiad.categories[0]}
					</span>
					<span className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>
						Возраст: {olympiad.ageRange || "16-27 лет"}
					</span>
				</div>
				<h2 className='text-[#D8C5FF] font-[family-name:var(--font-gerhaus)] text-center 2xl:text-[144px] md:text-6xl sm:text-4xl text-2xl leading-tight md:mb-12 mb-8 lg:mt-0 mt-10'>
					{olympiad.title.toUpperCase()}
				</h2>
			</header>

			<main>
				<div className='md:px-[50px] px-6 md:mt-[100px] mt-[50px] flex w-full items-center md:text-left text-center'>
					<p className='font-[family-name:var(--font-gerhaus)] xl:text-5xl lg:text-2xl text-xl max-w-full'>
						{olympiad.description}
					</p>
				</div>
				<section className='bg-[#141414] md:px-[50px] px-6 md:py-12 py-6 md:mt-[100px] mt-[50px] font-involve'>
					<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl text-white'>
						НАПРАВЛЕНИЯ
					</h2>
					<div className='flex flex-wrap justify-center gap-3 max-w-6xl lg:text-2xl md:text-lg text-sm md:mt-2 lg:mt-[25px] mt-4 mx-auto'>
						{olympiad.categories.map((category, index) => (
							<span key={index} className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>
								{category}
							</span>
						))}
					</div>
				</section>
				{/* Этапы */}
				<section className='flex flex-col md:mt-[100px] mt-[50px]'>
					<h2 className='md:px-[50px] px-6 font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
						ЭТАПЫ
					</h2>

					<div className='w-full mt-6 relative'>
						{/* Линия времени */}
						<div className='absolute left-0 right-0 md:top-8 top-6 h-2 bg-[#141414]'></div>

						<div className='md:px-[50px] px-6 flex flex-row gap-8 overflow-x-auto pb-4 md:pb-6 scrollbar-hide'>
							{stages.map((stage, index) => (
								<div key={index} className='relative w-full flex flex-col'>
									<div className='absolute top-2 left-0 md:w-[55px] md:h-[55px] w-[40px] h-[40px] rounded-full bg-[#141414] flex items-center justify-center'>
										<div className='md:w-[22px] md:h-[22px] w-[16px] h-[16px] rounded-full bg-[#D8C5FF]'></div>
									</div>
									<h3 className='uppercase font-[family-name:var(--font-gerhaus)] md:text-[20px] text-[16px] md:ml-[70px] ml-[50px] mb-1 whitespace-nowrap'>
										{stage.title}
									</h3>
									<p className='md:text-[20px] text-[14px] text-black md:ml-[70px] ml-[50px] mt-1'>{stage.date}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Информационные блоки */}
				<section className='md:px-[50px] px-6 md:mt-[100px] mt-[50px]'>
					<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
						ДЕТАЛИ УЧАСТИЯ
					</h2>

					<div className='w-full grid xl:grid-cols-3 grid-cols-1 gap-6 mt-6 text-lg'>
						{/* Блок 1 - Формат */}
						<div className='bg-[#141414] p-6 rounded-4xl shadow-lg flex flex-col justify-center md:h-[237px] hover:scale-[101%] duration-300'>
							<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>ФОРМАТ</h3>
							<ul className='list-disc pl-5 mt-4 space-y-2 text-white'>
								{format.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>

						{/* Блок 2 - Возраст */}
						<div className='p-10 rounded-4xl shadow-lg flex flex-col justify-end bg-[#d8c5ff] md:h-[237px] hover:scale-[101%] duration-300'>
							<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-black'>ВОЗРАСТ</h3>
							<p className='text-[52px] font-[family-name:var(--font-gerhaus)]  text-white'>{ageRange}</p>
						</div>

						{/* Блок 3 - Организатор */}
						<div className='bg-[#141414] p-6 rounded-4xl shadow-lg flex flex-col justify-center md:h-[230px] hover:scale-[101%] duration-300'>
							<div className='flex flex-col gap-[6px]'>
								<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>ОРГАНИЗАТОР</h3>
								<p className='text-white mt-4'>{organizer.name}</p>
								{organizer.support && <p className='text-gray-400 mt-2'>{organizer.support}</p>}
							</div>
						</div>
					</div>
				</section>

				{/* Дополнительные блоки */}
				<section className='md:px-[50px] px-6 md:mt-[50px] mt-[40px]'>
					<div className='w-full grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6 text-lg'>
						{/* Блок 1 - Группы */}
						<div className='bg-[#D8C5FF] p-7 rounded-4xl shadow-lg flex gap-6 md:h-[150px] hover:scale-[101%] duration-300'>
							<div className='flex flex-col gap-[6px] md:max-w-[75%]'>
								<h3 className='text-2xl font-[family-name:var(--font-gerhaus)]'>РЕСУРСЫ</h3>
								<p className='text-black text-xl mt-4'>Документация, онлайн-курсы, материалы на платформе Braim</p>
							</div>
							<div className='md:flex hidden items-end justify-center'>
								<Image src='/metting_favorite_alerts.png' alt='Ресурсы' width={122} height={122} className='-mb-1.5' />
							</div>
						</div>

						{/* Блок 2 - Призы и стажировки */}
						<div className='bg-black p-6 rounded-4xl shadow-lg flex flex-col md:h-[270px] hover:scale-[101%] duration-300'>
							<div className='flex flex-col gap-4 font-[family-name:var(--font-gerhaus)] lg:text-[30px] md:text-[20px] text-[14px]'>
								<div className='flex gap-2'>
									<div className='flex items-center gap-2 bg-black border-3 border-white rounded-full px-4 py-2 w-max'>
										<span className='text-[#D8C5FF]'>ДЕНЕЖНЫЕ НАГРАДЫ</span>
									</div>
									<div className='h-full'>
										<Image src='/moon-round.png' alt='Денежные награды' width={60} height={60} />
									</div>
								</div>
								<div className='flex gap-2'>
									<div>
										<Image src='/energy-round.png' alt='Статьи' width={60} height={60} />
									</div>
									<div className='flex items-center gap-2 bg-black border-3 border-white rounded-full px-4 py-2 w-max'>
										<span className='text-[#D8C5FF]'>СТАЖИРОВКИ В IT-КОМПАНИЯХ</span>
									</div>
								</div>
							</div>
							<h3 className='text-[#D8C5FF] text-4xl font-[family-name:var(--font-gerhaus)] mt-4'>ПРИЗЫ</h3>
						</div>
					</div>
				</section>

				{/* Баннер УЧАСТВОВАТЬ */}
				<section className='md:px-[50px] px-6 md:mt-[100px] mt-[75px] mb-20'>
					<Link
						href={olympiad.registrationLink || "#"}
						className='relative block w-full overflow-hidden rounded-4xl hover:scale-[101%] transition-transform duration-300'
					>
						{/* Фоновое изображение */}
						<div className='relative w-full md:h-[370px] h-[270px]'>
							<div className='absolute inset-0 bg-[#141414]'></div>
							<Image
								src='/join.png'
								alt='Участвовать в олимпиаде'
								fill
								className='absolute object-cover xl:object-contain brightness-100 z-10'
							/>

							{/* Контейнер для кнопки по центру */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='bg-[#D8C5FF] text-black px-20 py-6 rounded-full text-lg md:text-4xl flex items-center gap-2 font-[family-name:var(--font-gerhaus)]'>
									УЧАСТВОВАТЬ
								</div>
							</div>
						</div>
					</Link>
				</section>
			</main>
		</>
	);
}
