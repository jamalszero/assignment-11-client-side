
const FeatureCard = ({ feature }) => {
    return (
     
            <div className="card border border-slate-500">
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-500">{feature.title}</h2>
                    <p className="text-slate-400">{feature.description}</p> 
                </div>
            </div>
       
    );
};

export default FeatureCard;