import React from 'react';
import './LandingContent.css';

const LandingContent = () => {
    const testimonials = [
        { name: "Antonio", avatar: "A", title: "Software Engineer", description: "This is the best application I've used!" },
        { name: "Maria", avatar: "M", title: "Product Manager", description: "Amazing experience!" },
        { name: "John", avatar: "J", title: "Designer", description: "Highly recommend!" },
        { name: "Carlos", avatar: "C", title: "Architect", description: "Love it!" },
    ];

    return (
        <div className="landing-content-lct">
            <h2 className="landing-title-lct">Testimonials</h2>
            <div className="grid-container-lct">
                {testimonials.map((item) => (
                    <div key={item.description} className="card-lct">
                        <div className="card-header-lct">
                            <div className="card-title-lct">
                                <div>
                                    <p className="text-lg-lct">{item.name}</p>
                                    <p className="card-subtitle-lct">{item.title}</p>
                                </div>
                            </div>
                            <div className="card-content-lct">
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingContent;
