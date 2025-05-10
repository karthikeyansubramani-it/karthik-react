 const RestaurantCard= (props) => {
    const {resData} = props
    return (

        <div className="res-card">
            <img className="res-logo" alt ="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>
            {resData.info.name}
            </h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.avgRating} Ratings {resData.info.sla.deliveryTime} mins</h5>
            <h5>{resData.info.costForTwo}</h5>

        </div>
    );
}

export default RestaurantCard;