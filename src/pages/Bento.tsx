import { PageSetup } from "@/components/PageSetup";

export default function Bento() {
  const sortedDataset = datasetOne.reduce(
    (acc, curr) => {
      if (curr.value >= 95) {
        acc.xl.push(curr);
        return acc;
      }
      if (curr.value >= 60) {
        acc.lg.push(curr);
        return acc;
      }
      if (curr.value >= 20) {
        acc.md.push(curr);
        return acc;
      }
      acc.sm.push(curr);
      return acc;
    },
    { sm: [], md: [], lg: [], xl: [] } as Record<
      string,
      Array<{ label: string; value: number }>
    >
  );

  return (
    <PageSetup>
      <div className="w-full text-center">
        <h2 className="text-3xl font-dosis">Bento</h2>
      </div>
      <div className="my-4">
        <p className="text-lg">
          This visualisation shows relative sizing between different data
          points. The sizing is grouped into bins, the standard is 4 bins.
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-2xl text-center font-dosis mb-4">
          Basic 1-level Bento
        </h3>
        <div className="w-96 mx-auto border-2 border-gray-800 p-2 text-white">

        <div className="flex flex-row gap-1 mb-1 flex-wrap">
          {sortedDataset.xl
            .sort((a, b) => {
              return b.value - a.value;
            })
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-24 bg-red-700 flex-grow text-center rounded-xl flex flex-col justify-center items-center border-2 border-yellow-500 hover:border-red-900 transition-colors">
                <div className="text-lg font-dosis">{item.label}</div>
                <div className="text-sm font-dosis">{item.value}</div>
              </div>
            ))}
            </div>

          <div className="flex flex-row gap-1 mb-1 flex-wrap">
            {sortedDataset.lg
              .sort((a, b) => {
                return b.value - a.value;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 h-16 bg-red-700 flex-grow text-center rounded-xl flex flex-col justify-center items-center border-2 border-yellow-500 hover:border-red-900 transition-colors">
                  <div className="text-lg font-dosis">{item.label}</div>
                  <div className="text-sm font-dosis">{item.value}</div>
                </div>
              ))}
          </div>

          <div className="flex flex-row gap-1 mb-1 flex-wrap">
            {sortedDataset.md
              .sort((a, b) => {
                return b.value - a.value;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="w-1/5 h-14 bg-red-700 flex-grow text-center rounded-xl flex flex-col justify-center items-center border-2 border-yellow-500 hover:border-red-900 transition-colors">
                  <div className="text-md font-dosis">{item.label}</div>
                  <div className="text-sm font-dosis">{item.value}</div>
                </div>
              ))}
          </div>

          <div className="flex flex-row gap-1 mb-1 flex-wrap">
            {sortedDataset.sm
              .sort((a, b) => {
                return b.value - a.value;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="w-1/5 h-1/6 bg-red-700 flex-grow text-center rounded-xl flex flex-col justify-center items-center border-2 border-yellow-500 hover:border-red-900 transition-colors">
                  <div className="text-sm font-dosis">{item.label} {item.value}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PageSetup>
  );
}

const datasetOne = [
  {
    label: "Apples",
    value: 100,
  },
  {
    label: "Oranges",
    value: 20,
  },
  {
    label: "Bananas",
    value: 80,
  },
  {
    label: "Pears",
    value: 25,
  },
  {
    label: "Grapes",
    value: 60,
  },
  {
    label: "Mangoes",
    value: 90,
  },
  {
    label: "Pineapples",
    value: 55,
  },
  {
    label: "Strawberries",
    value: 30,
  },
  {
    label: "Watermelons",
    value: 5,
  },
  {
    label: "Grapefruit",
    value: 1,
  },
  {
    label: "Raspberries",
    value: 22,
  },
  {
    label: "Kiwi",
    value: 28,
  },
  {
    label: "Dragonfruit",
    value: 24,
  },
  {
    label: "Avocado",
    value: 42,
  },
];
