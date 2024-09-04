import useWsbsocket from '@/hooks/use-websocket'

export default function Card({ url }: { url: string }) {
	const [ready, message] = useWsbsocket(url)

	return (
		<div className="flex flex-col gap-2 md:gap-4 bg-slate-100/50 rounded-md p-4 md:p-8">
			<code className="font-black bg-black text-white px-2 py-1 rounded-md mr-auto"> {url}</code>
			<div>Ready: {JSON.stringify(ready)}</div>
			<p className="text-sm md:text-base">Message: {JSON.stringify(message)}</p>
		</div>
	)
}
