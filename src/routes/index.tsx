import { Title } from 'solid-start'
import Counter from '~/components/Counter'
import { Image } from '@unpic/solid'

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>
			<Counter />
			<Image
				src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
				layout="constrained"
				width={800}
				height={600}
				alt="A lovely bath"
			/>
		</main>
	)
}
