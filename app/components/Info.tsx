import { Container } from "@/app/components/Container";

export function Info() {
    return (
      <Container>
        <section id="info" className="flex flex-col .w-4/ justify-center .items-center">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">🌬️ Wind Energy Predictor AI</h1>
                <p className="text-lg mb-6">
                    This AI-powered tool predicts <strong>wind energy production</strong> based on weather data you
                    provide. It uses machine learning models trained on hourly environmental data to forecast potential
                    wind energy output with high precision.
                </p>
            </div>

                <section className="mb-10 ">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">🚀 How It Works</h2>
                    <p>
                        Using key meteorological inputs such as temperature, humidity, wind speed, and wind direction,
                        the tool models wind behavior to estimate energy production, aiding renewable energy planning
                        and optimization.
                    </p>
                </section>

                <section className="mb-10 .mx-auto .w-3/4">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">📊 Input Format</h2>
                    <p className="mb-4">The tool accepts a <strong>CSV file</strong> containing hourly weather data. It
                        must include the following columns:</p>
                    <div className="overflow-x-auto">
                        <table className="w-3/4 text-left border border-gray-300">
                            <thead className="bg-blue-100 text-blue-800">
                            <tr>
                                <th className="p-2 border-b">Column Name</th>
                                <th className="p-2 border-b">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="p-2 border-b">Time</td>
                                <td className="p-2 border-b">Date and time (e.g., 1/2/2017 0:00)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">temperature_2m</td>
                                <td className="p-2 border-b">Temperature at 2 meters (°C)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">relativehumidity_2m</td>
                                <td className="p-2 border-b">Relative humidity (%)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">dewpoint_2m</td>
                                <td className="p-2 border-b">Dew point (°C)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">windspeed_10m</td>
                                <td className="p-2 border-b">Wind speed at 10m (m/s)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">windspeed_100m</td>
                                <td className="p-2 border-b">Wind speed at 100m (m/s)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">winddirection_10m</td>
                                <td className="p-2 border-b">Wind direction at 10m (°)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">winddirection_100m</td>
                                <td className="p-2 border-b">Wind direction at 100m (°)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border-b">windgusts_10m</td>
                                <td className="p-2 border-b">Wind gusts at 10m (m/s)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-10 .mx-auto w-3/4">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">✅ Example</h2>
                    <pre className="bg-gray-100 p-4 overflow-x-auto text-sm rounded border border-gray-300">
Time,temperature_2m,relativehumidity_2m,dewpoint_2m,windspeed_10m,windspeed_100m,winddirection_10m,winddirection_100m,windgusts_10m
1/2/2017 0:00,28.5,85,24.5,1.44,1.26,146,162,1.4
1/2/2017 1:00,28.4,86,24.7,2.06,3.99,151,158,4.4
...
      </pre>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 AI Model Highlights</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Built using Recurrent Neural Networks (RNNs) for time-series data</li>
                        <li>Handles missing values for inputs like temperature or humidity</li>
                        <li>Trained on high-resolution hourly datasets</li>
                        <li>Optimized for flexibility and performance</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">📦 Installation</h2>
                    <pre className="bg-gray-100 p-4 overflow-x-auto text-sm rounded border border-gray-300">
                        Request code access; Dept. Agricultural and Biosystems Engineering . KNUST
                    </pre>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">🛠️ Usage</h2>
                    <pre className="bg-gray-100 p-4 overflow-x-auto text-sm rounded border border-gray-300">
python predict.py --input data/your_weather_data.csv
      </pre>
                    <p className="mt-2">The tool will output a CSV with predicted wind energy values per hour.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">📈 Output Format</h2>
                    <p>A new column <code
                        className="bg-gray-200 px-1 py-0.5 rounded text-sm">predicted_energy_%</code> will be added to
                        your original file.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧩 Coming Features</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Web UI for uploads and predictions</li>
                        <li>Integration with live weather APIs</li>
                        <li>Support for turbine-specific modeling</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">🙌 Contributing</h2>
                    <p>Fork, clone, improve. Open issues or PRs for bugs, ideas, or features!</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">📜 License</h2>
                    <p>MIT License – see <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">LICENSE</code> file
                        for details.</p>
                </section>

                <footer className="text-center text-sm text-gray-600 mt-16">
                    <p>Built with ❤️ by <strong>Agricultural Engineers . KNUST</strong>.</p>
                </footer>
        </section>
      </Container>
)}