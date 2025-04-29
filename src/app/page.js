import Container from "@/components/Container";
import Banner from "@/components/Home/Banner";
import ServiceCard from "@/components/Home/ServiceCard";
// import LeftContent from "@/components/Home/LeftContent";
// import RightContent from "@/components/Home/RightContent";

export default function Home() {
  return (
    <Container>
      <Banner />

      {/* main content */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <section className="col-span-12">
          {/* Service Cards */}

          <ServiceCard
            user="David Lee"
            date="April 10, 2023"
            category="IT Services"
            title="IT Support & Consulting"
            description="We offer IT support services including setup, troubleshooting, and more to ensure smooth operations."
            tags={["IT", "Support"]}
            likes={120}
            comments={2}
            views={7500}
          />
        </section>

        {/* LeftContent and RightContent are kept commented out */}
        {/* <aside className="col-span-3">
                    <LeftContent />
                </aside>
                <aside className="col-span-3">
                    <RightContent />
                </aside> */}
      </main>
    </Container>
  );
}
