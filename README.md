<p align="center">
  <p align="center">
   <img width="150" height="150" src="https://github.com/itayoshri/haMavrizon/blob/main/public/logo.png" alt="Logo">
  </p>
  <h1 align="center"><b>HaMavrizon 2000</b></h1>
  <p align="center"><a href="https://hamavrizon.vercel.app/"><strong>hamavrizon.vercel.app</strong></a></p>
</p>

HaMavrizon (2000) is a web app that shows students helpful information about their absences from lessons using [Mashov](https://he.wikipedia.org/wiki/%D7%AA%D7%95%D7%9B%D7%A0%D7%AA_%D7%9E%D7%A9%D7%95%22%D7%91) API.
<br/>
<br/>

# How it works?

- The user login to their Mashov account using password or OTP.
- The information is transferred to our server that sends login request to Mashov with it.
- Mashov returns us `CSRF token` and a login `cookie`.
- Through that we request, using Mashov API, the relevant information about the student behavior events and lessons.
- The information is processed in the server and returned to the user.

# Architecture

This project is using NextJS for both front and back end.

# API

## `/mashov:`

- `/otp` - A post rquest which request Mashov to send OTP to the user.
- `/behave` - Returns behave events in format of IBehaveEvent[]
- `/timetable` - Returns student's schedule in format of IMashovTT[]
- `/schools` - Returns an array of all schools that use Mashov (used for login)

## `/`:

- `/studygroups` - Returns the relevant information about every study group
