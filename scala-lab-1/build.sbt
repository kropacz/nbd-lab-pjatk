scalaVersion := "2.13.5"
scalacOptions += "-language:higherKinds"
addCompilerPlugin("org.typelevel" %% "kind-projector" % "0.11.3" cross CrossVersion.full)

scalacOptions += "-Ydelambdafy:inline"
libraryDependencies += "org.scastie" %% "runtime-scala" % "1.0.0-SNAPSHOT"
scalacOptions ++= Seq(
  "-deprecation",
  "-encoding", "UTF-8",
  "-feature",
  "-unchecked"
)