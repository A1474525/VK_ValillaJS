import {myRequest} from "./request";
import {myStorage} from "./storage";
import {renderProfile} from "./renderProfile";
import {renderFriends} from "./renderFriends";

export function runInitProfile () {
    myRequest.create('users.get',
        'fields= bdate, city, online, last_seen,' +
        ' photo_200, universities, counters',
        'profile')

    window.profile = (profile) => {
        if (!profile.response || !profile.response[0]) return;
        const userProfile = profile.response[0];
        myStorage.setItem('profile', userProfile);

        //  if (profile.response[0]) new Profile(profile.response[0]);
        // renderProfile(userProfile);
        renderProfile(profile)
    };
}

export function runInitFriends () {
    myRequest.create('friends.get',
        'owner_id=24426005&order=hints&fields=photo_50',
        'friends')

    window.friends = (friends) => {
        if (!friends.response || !friends.response.items) return;
        const userFriends = friends.response.items;
        myStorage.setItem('friends', userFriends);
        renderFriends(friends)
    }
}
