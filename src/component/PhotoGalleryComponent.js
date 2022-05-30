import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderGalleryItem ({photos, onClick}) {
    return (
        <Card 
            onClick={() => onClick(photos.id)}>
            <CardImg width="100%" src={photos.image} alt={photos.name} />
            <CardImgOverlay>
                <CardTitle>{photos.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function renderphotos(photos) {
    if (photos != null)
        return(
            <Card>
                <CardImg top src={photos.image} alt={photos.name} />
                <CardBody>
                  <CardTitle>{photos.name}</CardTitle>
                  <CardText>{photos.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

const Gallery = (props) => {

    const gallery = props.photos.map((photos) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={photos.id}>
                <RenderGalleryItem photos={photos} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {gallery}
            </div>
       <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {renderphotos(props.photos[props.selectedphotos])}
              </div>
            </div>
        </div>
    );
}

export default Gallery;