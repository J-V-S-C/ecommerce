import Header from '@/components/layout/Header';

export default function commonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col pt-40">
        <Header />
        <section className="">{children}</section>
      </div>
    </>
  );
}
