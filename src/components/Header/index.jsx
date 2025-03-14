import { HeaderContainer, Profile } from "./style";

import { Input } from "../Input";

export function Header() {
  return (
    <HeaderContainer>
      
      <h1>RocketMovies</h1>

      <Input placeholder="Search title" />

      <Profile>
        <div>
          <strong>
            Nicolas Kraide
          </strong>
          
          <span>
            logout
          </span>
        </div>

        <img
          src="https://github.com/devKraide.png"
          alt="user image"
        />
      </Profile>
    </HeaderContainer>
  );
}