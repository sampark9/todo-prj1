// import { NavLink } from 'react-router';
// import { dummyImage1, dummyImage2, search } from '../assets/images/images';
import SearchArea from '../components/home/SearchArea';
import PostArea from '../components/home/PostArea';

export default function Home() {
    return (
      <main className="page__main">
        <SearchArea />
        <PostArea />
      </main>
    );
}



