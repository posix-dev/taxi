export const getProfileData = (state: any) => state.profile.profileSubmit;
export const isProfileFilled = (state: any) =>
    (state.profile.profileSubmit.name &&
        state.profile.profileSubmit.date &&
        state.profile.profileSubmit.card &&
        state.profile.profileSubmit.cvv);
export const isLoading = (state: any) => state.profile.isLoading;
export const isSubmit = (state: any) => state.profile.isSubmit;