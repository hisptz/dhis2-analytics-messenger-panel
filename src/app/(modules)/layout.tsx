import React from "react"


export default function AppLayout({children}: { children: React.ReactNode }) {

		return <div className="flex flex-row ">
				<aside className="min-w-[200px]">
						Menu
				</aside>
				<main className="flex-1">
						{children}
				</main>
		</div>
}
