// import { useEffect, useRef } from "react";
// import api from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ReviewForm from "../reviewForm/ReviewForm";

// import React from "react";

// const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
//   const revText = useRef();
//   let params = useParams();
//   const movieId = params.movieId;

//   useEffect(() => {
//     getMovieData(movieId);
//   }, []);

//   const addReview = async (e) => {
//     e.preventDefault();

//     const rev = revText.current;

//     try {
//       const response = await api.post("/api/v1/reviews", {
//         reviewBody: rev.value,
//         imdbId: movieId,
//       });

//       const updatedReviews = [...reviews, { body: rev.value }];

//       rev.value = "";

//       setReviews(updatedReviews);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h3>Reviews</h3>
//         </Col>
//       </Row>
//       <Row className="mt-2">
//         <Col>
//           <img src={movie && movie.poster} alt="" />
//         </Col>
//         <Col>
//           {
//             <>
//               <Row>
//                 <Col>
//                   <ReviewForm
//                     handleSubmit={addReview}
//                     revText={revText}
//                     labelText="Write a Review?"
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <hr />
//                 </Col>
//               </Row>
//             </>
//           }
//           {reviews?.map((r) => {
//             return (
//               <>
//                 <Row>
//                   <Col>{r.body}</Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <hr />
//                   </Col>
//                 </Row>
//               </>
//             );
//           })}
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Reviews;
import { useEffect, useRef, useState } from "react"; // Add useState for initializing reviews
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const [localReviews, setLocalReviews] = useState(reviews || []); // Initialize localReviews state
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId, getMovieData]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      // Assuming the server returns the new review, update local reviews
      const updatedReviews = [...localReviews, { body: rev.value }];
      setLocalReviews(updatedReviews); // Set localReviews instead of reviews directly
      rev.value = ""; // Clear the review text input
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {/* Map over reviews safely, ensure reviews is an array */}
          {(localReviews || []).map((r, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
