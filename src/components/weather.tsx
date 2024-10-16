import { useEffect, useState } from 'react';
import { WeatherType } from '../types/weather-type';

export function Weather({ lat, long, date, name }: { lat: number; long: number; date: string; name?: string }) {
	const [weather, setWeather] = useState<WeatherType>();

	useEffect(() => {
		const fetchData = async () => {
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=6ba724810a96d7c62700ced07021be81`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
				});
		};
		fetchData();
	}, []);

	return (
		<div className='weather-widget'>
			<div className='widget-title'>
				<h5>{name || weather?.name}</h5>
			</div>
			<div className='date-time'>
				<h6>Time</h6> {date}
			</div>
			<div className='container mt-4 mb-4'>
				<div className='row'>
					<div className='col'>
						<h6>Temperature</h6>
						{weather?.main.temp}&deg;F
					</div>
					<div className='col'>
						<h6>Feels Like</h6>
						{weather?.main.feels_like}&deg;F
					</div>
					<div className='col text-align-center'>
						<h6>Humidity</h6>
						{weather?.main.humidity}%
					</div>
				</div>
			</div>
		</div>
	);
}
