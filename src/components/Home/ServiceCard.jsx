import {
    FaDesktop,
    FaMobileAlt,
    FaServer,
    FaCog,
    FaCreditCard,
    FaUsers,
} from "react-icons/fa";

const ServiceCard = ({
    title,
    description,
    icon,
    link,
    backgroundImage,
}) => {
    return (
        <div
            className="
                relative
                h-[350px]
                rounded-xl
                shadow-md
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
                transition-transform
                duration-300
                ease-in-out
                hover:scale-[1.02]
            "
            style={{
                backgroundImage: `url("${backgroundImage}")`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 h-full p-6 flex flex-col ">
                {/* Title */}
                <h3 className="font-bold text-xl text-orange-400">
                    {title}
                </h3>

                {/* Icon */}
                <div className="mt-6 text-4xl text-white">
                    {icon}
                </div>

                {/* Description */}
                <p className="text-gray-200 mt-5 leading-relaxed">
                    {description}
                </p>

       
            </div>
        </div>
    );
};

const ServiceList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ServiceCard
               
               
                link="/services/web-design"
                backgroundImage="/servicesImage/card-image.png"
            />

     

            <ServiceCard
              
                link="/services/mobile-app-development"
                 backgroundImage="/servicesImage/mobile-ap2.png"
            />

            <ServiceCard
              
                link="/services/it-technical-services"
                backgroundImage="/servicesImage/web-developer.png"
            />

            <ServiceCard
           
               backgroundImage="/servicesImage/ui-design.png"
            />

            <ServiceCard
            
              backgroundImage="/servicesImage/cloud-sol.png"
            />

            <ServiceCard
           
                link="/services/crm2.png"
               backgroundImage="/servicesImage/crm2.png"
            />

              <ServiceCard
           
                link="/services/crm2.png"
               backgroundImage="/servicesImage/digital2.png"
            />

        </div>
    );
};

export default ServiceList;