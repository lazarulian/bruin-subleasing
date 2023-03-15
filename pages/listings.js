import CardGrid from "@/components/CardGrid";

export default function Listings() {
  return (
    <div className="mx-auto my-5 py-5 text-center">
      <div className="pb-4">
        <h1 className="flex justify-center text-4xl font-semibold">Listings</h1>
        <p>Click on a listing to find more information.</p>
      </div>
      <CardGrid />
    </div>
  );
}
