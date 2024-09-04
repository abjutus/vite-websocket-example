import Card from './components/card'

export default function App() {
	return (
		<main className="min-h-screen">
			<div className="h-screen container px-8 md:px-0 py-8 md:py-20 mx-auto">
				<h1 className="font-semibold text-xl md:text-3xl my-8 md:my-12">Vite WebSocket Example</h1>
				<div className="grid md:grid-cols-3 gap-4 md:gap-20">
					<Card url="wss://echo.websocket.org/" />
					<Card url="/ws" />
				</div>
			</div>
		</main>
	)
}
