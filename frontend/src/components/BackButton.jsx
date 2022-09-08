import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function BackButton({ url }) {
	return (
		<Link to={url} className="btn btn-reverse btn-back">
			<FaArrowCircleLeft /> Back
		</Link>
	)
}
