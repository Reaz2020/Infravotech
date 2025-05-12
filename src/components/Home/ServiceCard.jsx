import { FaDesktop, FaMobileAlt, FaServer, FaCog } from "react-icons/fa";

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <div className="p-6 rounded-lg shadow-md mb-4 border-l-2 border-orange-500">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-pink-500">{title}</span>
            </div>
            <div className="text-center mt-4">
                <div className="text-4xl text-primary">{icon}</div>
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4">
                <a
                    href={link}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

const ServiceList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
                title="Web Design "
                description="We create visually appealing and user-friendly website designs that capture your brand's identity."
                icon={<FaDesktop />}
                link="/services/web-design"
            />
            <ServiceCard
                title="Web Development"
                description="Our web development services ensure that your website is functional, responsive, and fast."
                icon={<FaDesktop />}
                link="/services/web-development"
            />
            <ServiceCard
                title="Mobile App Development"
                description="We design and develop mobile applications that provide seamless user experiences."
                icon={<FaMobileAlt />}
                link="/services/mobile-app-development"
            />
            <ServiceCard
                title="IT Technical Services"
                description="We offer expert IT solutions for setting up and maintaining office IT infrastructure and systems."
                icon={<FaServer />}
                link="/services/it-technical-services"
            />
            <ServiceCard
                title="Office Setup & IT Equipment"
                description="Get your office equipped with the latest IT hardware and network setup for optimal productivity."
                icon={<FaCog />}
                link="/services/office-setup"
            />
        </div>
    );
};

export default ServiceList;
