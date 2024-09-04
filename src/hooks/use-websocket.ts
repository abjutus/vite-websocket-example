import { useEffect, useRef, useState } from 'react'

export default function useWsbsocket(url: string): [boolean, string | null] {
	const [isReady, setIsReady] = useState(false)
	const [message, setMessage] = useState(null)
	const ws = useRef(null)

	useEffect(() => {
		const socket = new WebSocket(url)

		socket.onopen = () => {
			console.log('WebSocket connected:', url)
			setIsReady(true)
		}
		socket.onclose = () => setIsReady(false)
		socket.onmessage = (event) => setMessage(event.data)

		ws.current = socket as any

		return () => socket.close()
	}, [])

	// bind is needed to make sure `send` references correct `this`
	return [isReady, message]
}
