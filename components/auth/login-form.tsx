"use client"

import {AuthCard} from "./auth-card"

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Wlcome Back!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      showSocials
    >
      <div>
        <h1>Hey</h1>
      </div>
    </AuthCard>
  )
}
