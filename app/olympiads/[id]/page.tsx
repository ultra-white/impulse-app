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
export async function generateMetadata(props: { params: { id: string } }): Promise<Metadata> {
	const olympiad = await getOlympiadById(props.params.id);

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

export default async function OlympiadPage(props: { params: { id: string } }) {
	// Получаем данные олимпиады по ID
	const olympiad = await getOlympiadById(props.params.id);

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

				<h2 className='text-[#D8C5FF] font-[family-name:var(--font-gerhaus)] text-center 2xl:text-[144px] md:text-6xl sm:text-4xl text-2xl leading-tight lg:mt-0 mt-12'>
					{olympiad.title.toUpperCase()}
				</h2>

				<div className='flex flex-wrap justify-center gap-3 max-w-6xl lg:text-2xl md:text-lg text-sm md:mt-2 mt-5 md:mb-12 mb-8'>
					{olympiad.categories.map((category, index) => (
						<span key={index} className='px-4 py-2 border border-[#D8C5FF] text-[#D8C5FF] rounded-full'>
							{category}
						</span>
					))}
				</div>
			</header>

			<main>
				<div className='md:px-[50px] px-6 md:mt-[100px] mt-[50px] flex w-full items-center md:text-left text-center'>
					<p className='font-[family-name:var(--font-gerhaus)] xl:text-5xl lg:text-2xl text-xl max-w-full'>
						{olympiad.description}
					</p>
				</div>
				{/* Этапы */}
				<section className='flex flex-col md:px-[50px] px-6 md:mt-[100px] mt-[75px]'>
					<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
						ЭТАПЫ
					</h2>

					<div className='w-full mt-6 relative'>
						{/* Линия времени */}
						<div className='absolute left-4 top-4 bottom-4 w-1 bg-[#D8C5FF]'></div>

						<div className='flex flex-col gap-10 pl-16'>
							{stages.map((stage, index) => (
								<div key={index} className='relative'>
									<div className='absolute left-[-3rem] top-[0.35rem] w-8 h-8 rounded-full bg-[#D8C5FF] flex items-center justify-center text-black font-bold'>
										{index + 1}
									</div>
									<h3 className='uppercase font-bold text-xl'>{stage.title}</h3>
									<p className='text-sm text-gray-400 mt-1'>{stage.date}</p>
									<p className='mt-2 text-lg'>{stage.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Информационные блоки */}
				<section className='md:px-[50px] px-6 md:mt-[100px] mt-[75px]'>
					<h2 className='font-[family-name:var(--font-gerhaus)] 2xl:text-[48px] md:text-4xl sm:text-3xl text-2xl'>
						ДЕТАЛИ УЧАСТИЯ
					</h2>

					<div className='w-full grid xl:grid-cols-3 grid-cols-1 gap-6 mt-6 text-lg'>
						{/* Блок 1 - Формат */}
						<div className='bg-[#141414] p-6 rounded-4xl shadow-lg flex flex-col md:h-[300px] hover:scale-[101%] duration-300'>
							<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>ФОРМАТ</h3>
							<ul className='list-disc pl-5 mt-4 space-y-2 text-white'>
								{format.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>

						{/* Блок 2 - Возраст */}
						<div className='p-3 rounded-4xl shadow-lg flex flex-col justify-end bg-[#d8c5ff] md:h-[300px] hover:scale-[101%] duration-300'>
							<div className='bg-white rounded-xl p-3 flex flex-col gap-[6px]'>
								<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-black'>ВОЗРАСТ</h3>
								<p className='text-4xl font-[family-name:var(--font-gerhaus)]'>{ageRange}</p>
							</div>
						</div>

						{/* Блок 3 - Организатор */}
						<div className='bg-[#141414] p-6 rounded-4xl shadow-lg flex flex-col md:h-[300px] hover:scale-[101%] duration-300'>
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
						<div className='bg-[#141414] p-6 rounded-4xl shadow-lg flex flex-col md:h-[300px] hover:scale-[101%] duration-300'>
							<div className='flex flex-col gap-[6px]'>
								<h3 className='text-2xl font-[family-name:var(--font-gerhaus)] text-[#D8C5FF]'>ЦЕЛЕВЫЕ ГРУППЫ</h3>
								<p className='text-white mt-4'>
									{olympiad.groups || "Университеты, индивидуальные участники, профессиональные команды"}
								</p>
							</div>
						</div>

						{/* Блок 2 - Призы и стажировки */}
						<div className='p-3 rounded-4xl shadow-lg flex flex-col relative overflow-hidden md:h-[300px] hover:scale-[101%] duration-300'>
							<Image
								src='/calculator.png'
								alt='Призы'
								width={1000}
								height={1000}
								className='absolute inset-0 w-full h-full object-cover'
							/>
							<div className='z-10 bg-white p-3 rounded-2xl md:max-w-120 mt-auto'>
								<h3 className='text-2xl font-[family-name:var(--font-gerhaus)]'>ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ</h3>
								{olympiad.prizes && <p className='mt-2'>• Ценные призы от организаторов и спонсоров</p>}
								{olympiad.internship && <p className='mt-2'>• Стажировка в ведущих IT-корпорациях</p>}
								{olympiad.additionalBenefits && <p className='mt-2 font-bold'>• {olympiad.additionalBenefits}</p>}
							</div>
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
						<div className='relative w-full h-[370px]'>
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
