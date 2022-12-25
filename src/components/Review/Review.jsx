import useLocalStorage from 'components/hooks/useLocalStorage';

const Review = props => {
  const [review, setReview] = useLocalStorage('review', '');

  const handleChange = e => {
    setReview(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          <p>Write review</p>
          <textarea
            style={{ resize: 'none', padding: 5 }}
            name="review"
            value={review}
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;
