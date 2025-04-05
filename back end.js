import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const cities = ["Delhi", "Mumbai", "Kolkata", "Kanpur", "Lucknow"];

const precautions = [
  "Avoid outdoor activities during high pollution hours.",
  "Wear an N95 mask when going outside.",
  "Use air purifiers at home.",
  "Stay hydrated to help your body detox.",
  "Keep windows closed to prevent indoor pollution."
];

export default function PollutionMeter() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Mock data; in real case, fetch from an API
      const mockData = {
        Delhi: 295,
        Mumbai: 180,
        Kolkata: 230,
        Kanpur: 310,
        Lucknow: 270
      };
      setData(mockData);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">City Pollution Meter</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cities.map((city) => (
            <Card key={city} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{city}</h2>
                <p>Pollution Level (AQI): {data[city]}</p>
                <Progress value={Math.min(data[city], 500)} max={500} />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Precautions</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {precautions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
