---
title: API Reference
---

## Authentication

### `/auth/register`

Register user

Method: `POST`

#### Parameters

- email: string (required)
- cookie: boolean
- user_data: object
- register_options:
  - allowed_roles: string[]
  - default_roles: string

if `MAGIC_LINK_ENABLED` is `false`:

- password: string (_required_)

if `MAGIC_LINK_ENABLED` is `true`:

- password: string

If a password is provided, the user will register with email and password.

If no password is provided, the user will register using a magic link.

#### Response

If `AUTO_ACTIVATE_NEW_USERS` the response will include values for `jwt_token`, `jwt_expires_in` and `refresh_tokens` effecivly logging in the user on a sucessful registration.

- jwt_token?: string
- jwt_expires_in?: int
- refresh_token?: string
- user:
  - id: string
  - email: string
  - display_name?: string
  - avatar_url?: string

### `/auth/login`

Login user.

Method: `POST`

#### Parameters

- email: string (required)
- cookie: boolean

if `MAGIC_LINK_ENABLED` is `false`:

- password: string (required)

if `MAGIC_LINK_ENABLED` is `true`:

- password: string

If a password is provided, the user will login with email and password.

If no password is provided, the user will login using a magic link.

#### Response

- jwt_token: string
- jwt_expires_in: int
- refresh_token: string
- user:
  - id: string
  - email: string
  - display_name?: string
  - avatar_url?: string

If the user has multi factor authentication enabled:

- mfa: true
- ticket: string

if no `password` was provided as a parameter and `MAGIC_LINK_ENABLED` is `true`:

- magicLink: true

### `/auth/logout`

Logout user.

Method: `POST`

#### Parameters

- all: boolean

If `all` is `true` the user will be logged out on all devices by deleting all `refresh_token` for the user in the database.

#### Reponse

204 - no data

### `/auth/activate`

Activate user account.

Method: `GET`

#### Parameters

- ticket: string (required)

#### Reponse

302 redirect to `REDIRECT_URL_SUCCESS`

A refresh_token will be added as a qurey parameter to the redirect.

### `/auth/delete`

For user to delete their own account.

`ALLOW_USER_SELF_DELETE` must be `true` for this route to be active.

Method: `POST`

#### Parameters

_No parameters_

#### Reponse

204 - no data

### `/auth/magic-link`

Log in user using Magic Link.

`ALLOW_USER_SELF_DELETE` must be `true` for this route to be active.

Method: `GET`

#### Parameters

- token: string (required)
- action: `log-in` or `register` (required)
- cookie: boolean

#### Reponse

302 redirect to `REDIRECT_URL_SUCCESS`

A refresh_token will be added as a qurey parameter to the redirect.

### `/auth/token/refresh`

Get new tokens.

Method: `GET`

#### Parameters

- refresh_token (required)

#### Reponse

- jwt_token?: string
- jwt_expires_in?: int
- refresh_token?: string
- user:
  - id: string
  - email: string
  - display_name?: string
  - avatar_url?: string

### `/auth/token/revoke`

Delete all user's refresh tokens. Same as `/auth/logout` with aparameter `all=true`.

#### Parameters

_No parameters_

#### Reponse

204 - no data

### `/auth/change-email`

Change email without verifying new email.

`VERIFY_EMAILS` must be `false` for this route to be available.

Method: `POST`

#### Parameters

- new_email: string (required)

#### Response

204 - no data

### `/auth/change-email/request`

Request to change to a new email.

HBP will send a confirmation email to the new email. The user must click the link in the email to confirm the new email and have their email changed.

`VERIFY_EMAILS` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- new_email: string (required)

#### Response

204 - no data

### `/auth/change-email/change`

Change user's email to the new email that was requested using `/auth/change-email/request`.

Method: `POST`

#### Parameters

- ticket: string (required)

#### Response

204 - no data

### `/auth/change-password`

Change user's password.

Method: `POST`

#### Parameters

- old_password: string (required)
- new_password: string

#### Response

204 - no data

### `/auth/change-password/request`

Request to change user's password. The user will receive an email with a ticket. The ticket can be userd to change the user's password.

`LOST_PASSWORD_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- email: string (required)

#### Response

204 - no data

### `/auth/change-password/change`

Change user's password using a tucket that was received via email sent from `/auth/change-password/request`.

`LOST_PASSWORD_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- ticket: string (required)
- new_password: string (required)

#### Response

204 - no data

### `/auth/mfa/generate`

Generate QR code and OTP secret to be used to enable MFA for user.

`MFA_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

_No parameters_

#### Response

- image_url: string
- otp_secret: string

### `/auth/mfa/enable`

Enable multi factor authentication for user.

`MFA_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- code: string (required)

#### Response

204 - no data

### `/auth/mfa/disable`

Disable multi factor authentication for user.

`MFA_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- code: string (required)

#### Response

204 - no data

### `/auth/mfa/totp`

Login user using MFA and TOTP.

`MFA_ENABLED` must be `true` for this route to be available.

Method: `POST`

#### Parameters

- ticket: string (required) - From the `/auth/login` route if MFA is enabled for the user.
- code : string (required) - From the user's password manager.

#### Response

- jwt_token: string
- jwt_expires_in: int
- refresh_token: string
- user:
  - id: string
  - email: string
  - display_name?: string
  - avatar_url?: string

### `/auth/jwks`

No documentation. We recommend using `HS512` algorithm with `JWT_KEY` instead.

## Storage

### Upload File

#### Request

`POST /storage/o/<path-to-file>/`

#### Parameters

- file: File

#### Response

- key: string
- AcceptRanges: string
- LastModified: string
- ContentLength: int
- ETag: string
- ContentType: string
- Metadata:
  - token: string

### Get File

#### Request

`GET /storage/o/<path-to-file>`

#### Example

`GET /storage/o/<path-to-file>?w=800&q=90`

#### Parameters

- w

Specify width in pixels of the image. If no height (`h`) is specified, the image automatically calculates the height to keep the image's aspect ratio. The value has to be between 0 and 8192.

- h

Specify the height of the image. If no width (`w`) is specified, the image automatically calculates the width to keep the image's aspect ratio. The value has to be between 0 and 8192.

- q

Specify the quality of the image with a value between 1 (very course) to 100 (lossless or almost lossless).

- f

Specify the preferred format of the requested image.

This parameter can be one of the following values: `webp`, `png`, `jpeg`, `auto`. When the value is `auto` the image will be transformed to the `webp` format if the request header explicitly accepts `image/webp`, otherwise the default format will be returned.

- r

Give the image rounded corners

This parameter can be either an integer or `full` for when the image has to be fully rounded (e.g. an avatar).

- b

Add a Gaussian blur to the image, the blur has to be between 0.3 and 1000.

#### Response

_file_

### File Metadata

Get file metadata.

#### Request

`GET /storage/m/<path-to-file>`

#### Parameters

_no parameters_

#### Response

- key: string
- AcceptRanges: string
- LastModified: string
- ContentLength: int
- ETag: string
- ContentType: string
- Metadata:
  - token: string

### File Directory

Get zip of all files in directory.

#### Request

`GET /storage/o/<path-to-file>/` (trailing slash)

#### Parameters

_no parameters_

#### Response

_Zip file_

### File Directory Metadata

#### Request

`GET /storage/m/<path-to-file>/` (trailing slash)

#### Parameters

_no parameters_

#### Response

Array of:

- key: string
- AcceptRanges: string
- LastModified: string
- ContentLength: int
- ETag: string
- ContentType: string
- Metadata:
  - token: string

#### Request

`DELETE /storage/o/<path-to-file>`

#### Parameters

_no parameters_

#### Response

_204 No Content_

## Service

### `/health` GET

System healh check.

#### Parameters

_No parameters_

#### Response

204 - No data
