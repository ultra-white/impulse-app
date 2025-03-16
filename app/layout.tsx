import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Подключение локальных шрифтов
const gerhaus = localFont({
	src: "../public/fonts/Gerhaus/Gerhaus.ttf",
	variable: "--font-gerhaus",
	display: "swap",
});

const involve = localFont({
	src: [
		{
			path: "../public/fonts/Involve/Involve-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Involve/Involve-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/Involve/Involve-Oblique.ttf",
			weight: "400",
			style: "oblique",
		},
	],
	variable: "--font-involve",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Импульс",
	description: "Check status of your olimpiads",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${gerhaus.variable} ${involve.variable} antialiased`}>{children}</body>
		</html>
	);
}
