import {useSelector, useDispatch} from 'react-redux';
import {toggleVisibleProfile} from "../store/profile";
import { ProfileForm } from '../components'

export const ProfilePage = () => {

  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch();

  return <div>
    ProfilePage
    <button onClick={() => dispatch(toggleVisibleProfile())}>toggleVisibleProfile</button>
    <hr/>
    {profile.isVisibleProfile &&
      <>
        <h1>{profile.firstName}</h1>
        <h1>{profile.lastName}</h1>

        <ProfileForm
          firstName={profile.firstName}
          lastName={profile.lastName}/>
      </>}
  </div>;
}